import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';



describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should check if the Component Exists ', () => {
    expect(component).toBeTruthy();
  });



});
