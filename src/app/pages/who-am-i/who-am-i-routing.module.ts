import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WhoAmIComponent} from './who-am-i.component';


const routes: Routes = [
  {
    path: '',
    component: WhoAmIComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoAmIRoutingModule { }
