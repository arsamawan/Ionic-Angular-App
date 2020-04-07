import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsDescriptionModalPage } from './skills-description-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SkillsDescriptionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsDescriptionModalPageRoutingModule {}
