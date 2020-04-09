import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  // @ts-ignore
  @ViewChild('slides') slides: IonSlides;
  constructor(public navCtrl: NavController) { }
  slideOpts = {
    initialSlide : 0,
    speed : 400
  };

  ngOnInit() {

  }
direct() {
    this.navCtrl.navigateForward('tabs/home');
  }
  Next() {
/*    alert('Slide Next!');*/
    this.slides.slideNext();
  }
}
