import { PlookupcombPage } from './../plookupcomb/plookupcomb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlookupdryPage } from '../plookupdry/plookupdry';
import { PlookupnormPage } from '../plookupnorm/plookupnorm';
import { PlookupoilyPage } from '../plookupoily/plookupoily';

/**
 * Generated class for the PlookupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plookup',
  templateUrl: 'plookup.html',
})
export class PlookupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlookupPage');
  }

  go_to_combinationproduct() {
    this.navCtrl.push(PlookupcombPage);
  }

  go_to_dryproduct(){
    this.navCtrl.push(PlookupdryPage);
  }

  go_to_normalproduct(){
    this.navCtrl.push(PlookupnormPage);
  }

  go_to_oilyproduct(){
    this.navCtrl.push(PlookupoilyPage);
  }

  selectOptions = {
    cssClass: 'remove-ok'
  };
}
