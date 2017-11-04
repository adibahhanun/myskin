import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsingrePage } from './tipsingre';

@NgModule({
  declarations: [
    TipsingrePage,
  ],
  imports: [
    IonicPageModule.forChild(TipsingrePage),
  ],
})
export class TipsingrePageModule {}
