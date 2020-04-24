import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SkillsPage} from './skills.page';

fdescribe('SkillsPage', () => {
    let component: SkillsPage;
    let fixture: ComponentFixture<SkillsPage>;
    let de: DebugElement;

    beforeEach(async(() =>  {
        TestBed.configureTestingModule({
            declarations: [ SkillsPage ],
            imports: [IonicModule.forRoot(), HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillsPage);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });
    it('should check if the Component Exists ', () => {
        expect(component).toBeTruthy();
    });

    it('should Check If the Fetch Detail have Something', () => {
        expect(component.FetchDesc).not.toBeNull();
    });

    it('should check the Close button is called with context', () => {
        expect(component.closeModal).withContext('Closed');
    });


});
