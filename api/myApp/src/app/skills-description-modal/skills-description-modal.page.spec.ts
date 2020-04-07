import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillsDescriptionModalPage } from './skills-description-modal.page';

describe('SkillsDescriptionModalPage', () => {
  let component: SkillsDescriptionModalPage;
  let fixture: ComponentFixture<SkillsDescriptionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDescriptionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsDescriptionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
