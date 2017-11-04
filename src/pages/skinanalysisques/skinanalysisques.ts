import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var TEST: any;

/**
 * Generated class for the SkinanalysisquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skinanalysisques',
  templateUrl: 'skinanalysisques.html',
})
export class SkinanalysisquesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinanalysisquesPage');
  }

}
