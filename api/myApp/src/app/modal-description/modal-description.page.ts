import {Component, Input, OnInit} from '@angular/core';
import {Student, StudentService} from '../services/student.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-description',
  templateUrl: './modal-description.page.html',
  styleUrls: ['./modal-description.page.scss'],
})
export class ModalDescriptionPage implements OnInit {
  @Input() student: Student;
  std;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(JSON.stringify(this.std));

    }
  closeModal() {
    this.modalCtrl.dismiss(null, 'Closed');
  }

}
