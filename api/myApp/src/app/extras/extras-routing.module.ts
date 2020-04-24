 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { ExtrasPage } from './extras.page';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';


 const routes: Routes = [
  {
    path: '',
    component: ExtrasPage
  }
];

 @NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class ExtrasPageRoutingModule {}
