import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SkillsPage} from './skills/skills.page';

const routes: Routes = [
 // { path: '', redirectTo: 'tab', pathMatch: 'full' },
 /*{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},*/
  {
    path: 'student-modal',
    loadChildren: () => import('./student-modal/student-modal.module').then( m => m.StudentModalPageModule)
  },
  {
    path: 'modal-description',
    loadChildren: () => import('./modal-description/modal-description.module').then( m => m.ModalDescriptionModule)
  },
/*  {
    path: 'extras',
    loadChildren: () => import('./extras/extras.module').then( m => m.ExtrasPageModule)
   },
   {
     path: 'skills',
   loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
   },*/
  {
    path: 'skills-description-modal',
    loadChildren: () => import('./skills-description-modal/skills-description-modal.module').then( m => m.SkillsDescriptionModalPageModule)
  },
  {
    path: 'skill-add-modal',
    loadChildren: () => import('./skill-add-modal/skill-add-modal.module').then( m => m.SkillAddModalPageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: '',
    loadChildren: () => import('./onboard/onboard.module').then( m => m.OnboardPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
