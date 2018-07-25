import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PocPage } from './poc';

@NgModule({
  declarations: [
    PocPage,
  ],
  imports: [
    IonicPageModule.forChild(PocPage),
  ],
})
export class PocPageModule {}
