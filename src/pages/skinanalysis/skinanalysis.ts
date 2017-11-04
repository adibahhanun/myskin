import { SkinanalysisquesPage } from './../skinanalysisques/skinanalysisques';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var TEST: any;
/**
 * Generated class for the SkinanalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skinanalysis',
  templateUrl: 'skinanalysis.html',
})
export class SkinanalysisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinanalysisPage');
  }

  go_to_skinanalysisques() {
    this.navCtrl.push(SkinanalysisquesPage);
  }
}
