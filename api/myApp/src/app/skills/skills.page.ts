import { Component, OnInit } from '@angular/core';
import {Skills, SkillService} from '../services/skill.service';
import {AlertController, ModalController} from '@ionic/angular';
import {SkillsDescriptionModalPage} from '../skills-description-modal/skills-description-modal.page';
import {SkillAddModalPage} from '../skill-add-modal/skill-add-modal.page';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

  skills: Skills[];


  constructor(private service: SkillService, private modalCtrl1: ModalController, private alertCtrl: AlertController ) {}
  ngOnInit() {
    this.service.getAllSkills().subscribe(response => {
      this.skills = response;
      console.log(this.skills);
    });
  }
   addSkill() {
    this.modalCtrl1.create({
      component: SkillAddModalPage
    }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
  });
}

    closeModal() {
        this.modalCtrl1.dismiss(null, 'Closed');
    }


  removeSkill(skillID: string) {
      console.log('removedf');
/*      console.log(this.skills);
      console.log();*/
      this.alertCtrl.create({
          header : 'Delete',
          message : 'Are you sure you want to Delete?',
          buttons : [{
              text: 'Yes',
              handler: () => {
                  this.service.removeSkillService(skillID).subscribe(() => {
                      this.skills = this.skills.filter(std1 => std1.skillID !== skillID);
                      console.log('just now' + this.skills);
                  });
              }
          },
              {text: 'No'}
          ]
      })
          .then(alertE1 => alertE1.present());
    }
  updateSkill(skills: Skills) {
      console.log('skillspage.ts' + JSON.stringify(skills));
      this.modalCtrl1
        .create({
          component: SkillAddModalPage,
          componentProps: {
              skill: skills
          }
        }).then(modal =>  {
          modal.present();
          return modal.onDidDismiss();
        });
  }

  FetchDesc(skills) { // Details of Skills Method
   console.log(skills);
   this.modalCtrl1.create({
      component: SkillsDescriptionModalPage,
      componentProps: {
        std1 : skills

      }
    }).then(modal => modal.present());

  }

}
