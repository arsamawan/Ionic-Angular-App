import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SkillAddModalPage } from './skill-add-modal.page';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SkillAddModalPage
      }
    ])
  ],
  declarations: [SkillAddModalPage]
})
export class SkillAddModalPageModule {}
