import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges'
import { PocPage } from '../pages/poc/poc';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet'
import { ButtonsPage } from '../pages/buttons/buttons'
import { CardsPage } from '../pages/cards/cards'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlertsPage,
    BadgesPage,
    PocPage,
    ActionSheetPage,
    ButtonsPage,
    CardsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlertsPage,
    BadgesPage,
    PocPage,
    ActionSheetPage,
    ButtonsPage,
    CardsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
