import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import {HomePageModule} from '../home/home.module';
import {ExtrasPageModule} from '../extras/extras.module';
import {SkillsPageModule} from '../skills/skills.module';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => HomePageModule,
      },
      {
        path: 'extras',
        loadChildren: () => ExtrasPageModule
      },
      {
        path: 'skills',
        loadChildren: () => SkillsPageModule
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
