import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoAmIRoutingModule } from './who-am-i-routing.module';
import {IonicModule} from '@ionic/angular';
import {WhoAmIComponent} from './who-am-i.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    WhoAmIComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DragDropModule,
    WhoAmIRoutingModule
  ],
  entryComponents: [
    WhoAmIComponent
  ]
})
export class WhoAmIModule { }
