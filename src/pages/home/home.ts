import { PlookcombPage } from './../plookcomb/plookcomb';
import { PlookupPage } from './../plookup/plookup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import { ContactPage } from '../contact/contact';
import { SkinanalysisPage } from '../skinanalysis/skinanalysis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  go_to_skinanalysis() {
    this.navCtrl.push(SkinanalysisPage);
  }

  go_to_plookup(){
    this.navCtrl.push(PlookupPage);
  }

  go_to_contact(){
    this.navCtrl.push(ContactPage);
  }

onImageLoad(loader: ImgLoader){

}


  
}
