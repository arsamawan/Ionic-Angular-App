import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {HomePage} from './home.page';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let de: DebugElement;

    beforeEach(async(() =>  {
        TestBed.configureTestingModule({
            declarations: [ HomePage ],
            imports: [IonicModule.forRoot(), HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });
    it('should check if the Component Exists ', () => {
        expect(component).toBeTruthy();
    });
    it('should Check If the Fetch Detail Function Exist', () => {
        expect(component.fetchDetail).toBeTruthy();
    });


});
