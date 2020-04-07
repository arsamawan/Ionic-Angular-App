import { Component , OnInit} from '@angular/core';
import {Student, StudentService} from '../services/student.service';
import {ModalController} from '@ionic/angular';
/*import {StudentModalPage} from '../student-modal/student-modal.page';*!/*/
import {ModalDescriptionPage} from '../modal-description/modal-description.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  students: Student[];

  constructor(private service: StudentService, private modalCtrl: ModalController) {}
  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.students = response;
    });
  }

fetchDetail(student) { // Details of Card Fetch ( Creating Modal)
    this.modalCtrl.create({
      component: ModalDescriptionPage,
      componentProps: {
        std : student

      }
    }).then(modal => modal.present());

    }

}


