import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ActionSheetPage } from '../action-sheet/action-sheet'
import { AlertsPage } from '../alerts/alerts';
import { BadgesPage } from '../badges/badges';
import { ButtonsPage } from '../buttons/buttons'
import { CardsPage } from '../cards/cards'
/**
 * Generated class for the PocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poc',
  templateUrl: 'poc.html',
})
export class PocPage {

  pages: Array<{ title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Action Sheet', component: ActionSheetPage},
      { title: 'Alerts', component: AlertsPage},
      { title: 'Badges', component: BadgesPage},
      { title: 'Buttons', component: ButtonsPage},
      { title: 'Cards', component: CardsPage},
    ];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PocPage');
  }

  items = [
    'Action Sheet',
  ];
 

  itemSelected(page) {
   console.log("Selected Item", page);
    this.navCtrl.push(page.component, {});
    //this.navCtrl.setRoot(page.component);
  }
}
