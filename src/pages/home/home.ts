import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

// import { ListPage } from '../list/list';
// import { MyactionsheetPage } from '../myactionsheet/myactionsheet';
// import { TabsPage } from '../tabs/tabs';
// import { AlertsPage } from '../alerts/alerts';
// import { BadgesPage } from '../badges/badges';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  constructor(
    public navCtrl: NavController,
    public platform: Platform,) {

  }
  
}

