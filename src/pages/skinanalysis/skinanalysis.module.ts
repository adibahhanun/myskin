import { NgModule } from '@angular/core';
import { IonicPageModule, ActionSheetController, LoadingController } from 'ionic-angular';
import { SkinanalysisPage } from './skinanalysis';
import { Camera } from 'ionic-native';

@NgModule({
  declarations: [
    SkinanalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(SkinanalysisPage),
  ],
})
export class SkinanalysisPageModule {
  srcImage: string;
  OCRAD: any;

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController
  ) {}

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Choose Photo',
          handler: () => {
            this.getPicture(0); // 0 == Library
          }
        },{
          text: 'Take Photo',
          handler: () => {
            this.getPicture(1); // 1 == Camera
          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  getPicture(sourceType: number) {
    // You can check the values here:
    // https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
    Camera.getPicture({
      quality: 100,
      destinationType: 0, // DATA_URL
      sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.srcImage = `data:image/jpeg;base64,${imageData}`;
      this.analyze();
    }, (err) => {
      console.log(`ERROR -> ${JSON.stringify(err)}`);
    });
  }

  analyze() {
    let loader = this.loadingCtrl.create({
     content: 'Please wait...'
    });
    loader.present();
    (<any>window).OCRAD(document.getElementById('image'), text => {
      loader.dismissAll();
      alert(text);
      console.log(text);
    });
  }
  
  }
