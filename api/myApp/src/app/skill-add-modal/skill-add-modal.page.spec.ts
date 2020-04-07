import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillAddModalPage } from './skill-add-modal.page';

describe('SkillAddModalPage', () => {
  let component: SkillAddModalPage;
  let fixture: ComponentFixture<SkillAddModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAddModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillAddModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
