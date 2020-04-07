import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {RouterModule} from '@angular/router';
import {ModalDescriptionPage} from './modal-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalDescriptionPage
      }
    ])
  ],
  declarations: [ModalDescriptionPage],
  entryComponents: [ModalDescriptionPage]
})
export class ModalDescriptionModule {}
