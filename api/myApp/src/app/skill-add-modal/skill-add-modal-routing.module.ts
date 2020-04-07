import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillAddModalPage } from './skill-add-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SkillAddModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillAddModalPageRoutingModule {}
