import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OnboardPage} from './onboard.page';

describe('OnboardPage', () => {
  let component: OnboardPage;
  let fixture: ComponentFixture<OnboardPage>;
  let de: DebugElement;

  beforeEach(async(() =>  {
    TestBed.configureTestingModule({
      declarations: [ OnboardPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should check if the Component Exists ', () => {
    expect(component).toBeTruthy();
  });


});
