import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuredPage } from './insured';

@NgModule({
  declarations: [
    InsuredPage,
  ],
  imports: [
    IonicPageModule.forChild(InsuredPage),
  ],
})
export class InsuredPageModule {}
