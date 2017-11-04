import { PlooknutoxcreamPage } from './../plooknutoxcream/plooknutoxcream';
import { PlooknutoxmoisturizerPage } from './../plooknutoxmoisturizer/plooknutoxmoisturizer';
import { PlooknutoxtonerPage } from './../plooknutoxtoner/plooknutoxtoner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlooknutoxcleanserPage } from '../plooknutoxcleanser/plooknutoxcleanser';
import { PlooknutoxserumPage } from '../plooknutoxserum/plooknutoxserum';

/**
 * Generated class for the PlookcombPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plookcomb',
  templateUrl: 'plookcomb.html',
})
export class PlookcombPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlookcombPage');
  }

  go_to_nutoxcleanser() {
    this.navCtrl.push(PlooknutoxcleanserPage);
  }

  go_to_nutoxtoner() {
    this.navCtrl.push(PlooknutoxtonerPage);
  }

  go_to_nutoxmoisturizer() {
    this.navCtrl.push(PlooknutoxmoisturizerPage);
  }
  
  go_to_nutoxcream() {
    this.navCtrl.push(PlooknutoxcreamPage);
  }

  go_to_nutoxserum() {
    this.navCtrl.push(PlooknutoxserumPage);
  }
}
