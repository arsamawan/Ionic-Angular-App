import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-skills-description-modal',
  templateUrl: './skills-description-modal.page.html',
  styleUrls: ['./skills-description-modal.page.scss'],
})

export class SkillsDescriptionModalPage implements OnInit {
  std1;
  constructor(private modalCtrl1: ModalController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalCtrl1.dismiss(null, 'Closed');
  }



}
