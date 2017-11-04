import { PlookmomohimecreamPage } from './../plookmomohimecream/plookmomohimecream';
import { PlooksimplysitiserumPage } from './../plooksimplysitiserum/plooksimplysitiserum';
import { PlooksimplysitimoisturizerPage } from './../plooksimplysitimoisturizer/plooksimplysitimoisturizer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlooksimplysiticleanserPage } from '../plooksimplysiticleanser/plooksimplysiticleanser';
import { PlooksimplysititonerPage } from '../plooksimplysititoner/plooksimplysititoner';

/**
 * Generated class for the PlooknormalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plooknormal',
  templateUrl: 'plooknormal.html',
})
export class PlooknormalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlooknormalPage');
  }

  go_to_simplysiticleanser() {
    this.navCtrl.push(PlooksimplysiticleanserPage);
  }

  go_to_simplysitiserum() {
    this.navCtrl.push(PlooksimplysitiserumPage);
  }

  go_to_simplysititoner() {
    this.navCtrl.push(PlooksimplysititonerPage);
  }

  go_to_simplysitimoisturizer() {
    this.navCtrl.push(PlooksimplysitimoisturizerPage);
  }

  go_to_momohimecream() {
    this.navCtrl.push(PlookmomohimecreamPage);
  }
  
}
