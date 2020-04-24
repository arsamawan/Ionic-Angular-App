import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExtrasPage } from './extras.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';

describe('ExtrasPage', () => {
  let component: ExtrasPage;
  let fixture: ComponentFixture<ExtrasPage>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtrasPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ExtrasPage);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      fixture.detectChanges();
    });
  it('should check if the component exists ', () => {
      expect(component).toBeTruthy();
    });
  });
