import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardPage } from './onboard.page';
import {TabsPageRoutingModule} from '../tabs/tabs-routing.module';

const routes: Routes = [
  {
    path: '',
    component: OnboardPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardPageRoutingModule {}
