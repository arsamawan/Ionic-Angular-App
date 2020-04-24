import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentModalPage} from './student-modal/student-modal.page';
import {ModalDescriptionPage} from './modal-description/modal-description.page';
import {MbscModule} from '@mobiscroll/angular-lite';
import {SkillsDescriptionModalPage} from './skills-description-modal/skills-description-modal.page';
import {SkillAddModalPage} from './skill-add-modal/skill-add-modal.page';
import {SkillService} from './services/skill.service';
import {StudentService} from './services/student.service';

@NgModule({
  declarations: [AppComponent , StudentModalPage , ModalDescriptionPage, SkillsDescriptionModalPage, SkillAddModalPage],
  entryComponents: [ StudentModalPage , ModalDescriptionPage , SkillsDescriptionModalPage, SkillAddModalPage ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, MbscModule ],
  providers: [
    StatusBar,
    SplashScreen,
      SkillService,
      StudentService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
