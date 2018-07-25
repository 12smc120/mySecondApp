import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
//import { TabsPage } from '../pages/tabs/tabs';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { PocPage } from '../pages/poc/poc';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ icon: string, title: string, component: any, arrow: string }>;

  constructor(
    //public Nav: Nav,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      {
        icon: 'md-home',
        title: 'Home',
        component: HomePage,
        arrow: 'ios-arrow-forward'
      },
      { icon: 'ios-list-box', title: 'List', component: ListPage, arrow: 'ios-arrow-forward' },
      { icon: 'ios-book', title: 'Sheet', component: ActionSheetPage, arrow: 'ios-arrow-forward' },
      { icon: 'ios-alert', title: 'Alerts', component: AlertsPage, arrow: 'ios-arrow-forward' },
      { icon: 'md-american-football', title: 'Badges', component: BadgesPage, arrow: 'ios-arrow-forward' },
      { icon: 'md-barcode', title: 'POC', component: PocPage, arrow: 'ios-arrow-forward' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  public selectedSection = 'HomePage';


  //public tabName = 'HomePage';
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

    if (page.title == 'Home') {
      this.selectedSection = 'HomePage';
    } else if (page.title == 'List') {
      this.selectedSection = 'ListPage';
    } else if (page.title == 'Sheet') {
      this.selectedSection = 'Sheet';
    } else if (page.title == 'Alerts') {
      this.selectedSection = 'AlertsPage';
    } else if (page.title == 'Badges') {
      this.selectedSection = 'BadgesPage';
    } else if (page.title == 'POC') {
      this.selectedSection = 'PocPage';
    } 
  }

  openPage2(tab) {
    // this.initializeApp();
    if (tab == 'HomePage') {
      this.nav.setRoot(HomePage);
      //this.nav.push(HomePage, {});
    } else if (tab == 'ListPage') {
      this.nav.setRoot(ListPage);
    } else if (tab == 'Sheet') {
      this.nav.setRoot(ActionSheetPage);
    } else if (tab == 'AlertsPage') {
      this.nav.setRoot(AlertsPage);
    } else if (tab == 'BadgesPage') {
      this.nav.setRoot(BadgesPage);
    }
  }

}
