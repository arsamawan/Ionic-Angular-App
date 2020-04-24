import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage implements OnInit {

  constructor() { }
  extra: any;



  ngOnInit() {
  }
  arsam(parameter1) {
    console.log('Heloworld!');
  }

}
