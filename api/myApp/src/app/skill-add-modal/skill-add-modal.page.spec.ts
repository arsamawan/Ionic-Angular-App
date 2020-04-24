import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SkillAddModalPage } from './skill-add-modal.page';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('SkillAddModalPage', () => {
  let component: SkillAddModalPage;
  let fixture: ComponentFixture<SkillAddModalPage>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAddModalPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAddModalPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should check if the Component Exists ', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should Check If the Fetch Detail Function Exist', () => {
    expect(component.fetchDetail).toBeTruthy();
  });
*/


});
