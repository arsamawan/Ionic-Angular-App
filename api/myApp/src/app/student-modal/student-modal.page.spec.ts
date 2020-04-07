import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentModalPage } from './student-modal.page';

describe('StudentModalPage', () => {
  let component: StudentModalPage;
  let fixture: ComponentFixture<StudentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
