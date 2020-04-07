import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path : 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home' ,
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },      {
        path: 'extras' ,
        children: [
          {
            path: '',
            loadChildren: '../extras/extras.module#ExtrasPageModule'
          }
        ]
      }, {
        path: 'skills' ,
        children: [
          {
            path: '',
            loadChildren: '../skills/skills.module#SkillsPageModule'
          }
        ]
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
