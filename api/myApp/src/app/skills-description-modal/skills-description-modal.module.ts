import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsDescriptionModalPageRoutingModule } from './skills-description-modal-routing.module';

import { SkillsDescriptionModalPage } from './skills-description-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsDescriptionModalPageRoutingModule
  ],
  declarations: [SkillsDescriptionModalPage]
})
export class SkillsDescriptionModalPageModule {}
