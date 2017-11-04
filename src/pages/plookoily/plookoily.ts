import { PlookmomohimecreamPage } from './../plookmomohimecream/plookmomohimecream';
import { PlookmomohimecleanserPage } from './../plookmomohimecleanser/plookmomohimecleanser';
import { PlookgoodvirtuestonerPage } from '../plookgoodvirtuestoner/plookgoodvirtuestoner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlooksyahirahmoisturizerPage } from '../plooksyahirahmoisturizer/plooksyahirahmoisturizer';
import { PlookmomohimeessencePage } from '../plookmomohimeessence/plookmomohimeessence';

/**
 * Generated class for the PlookoilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plookoily',
  templateUrl: 'plookoily.html',
})
export class PlookoilyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlookoilyPage');
  }

  go_to_momohimecleanser() {
    this.navCtrl.push(PlookmomohimecleanserPage);
  }

  go_to_goodvirtuestoner() {
    this.navCtrl.push(PlookgoodvirtuestonerPage);
  }

  go_to_syahirahmoistruzer() {
    this.navCtrl.push(PlooksyahirahmoisturizerPage);
  }

  go_to_momohimeessence() {
    this.navCtrl.push(PlookmomohimeessencePage);
  }
  
  go_to_momohimecream() {
    this.navCtrl.push(PlookmomohimecreamPage);
  }
}
