import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillsDescriptionModalPage } from './skills-description-modal.page';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SkillsDescriptionModalPage', () => {
  let component: SkillsDescriptionModalPage;
  let fixture: ComponentFixture<SkillsDescriptionModalPage>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDescriptionModalPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDescriptionModalPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should check if the Component Exists ', () => {
    expect(component).toBeTruthy();
  });


});
