import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {Skills, SkillService} from '../services/skill.service';

@Component({
    selector: 'app-skill-add-modal',
    templateUrl: './skill-add-modal.page.html',
    styleUrls: ['./skill-add-modal.page.scss'],
})
export class SkillAddModalPage implements OnInit {
    skill;
    isUpdate = false;
    data: any;
    fields: any;
    desc: any;

    constructor(private modalCtrl1: ModalController, private service: SkillService) {
    }

    ngOnInit() {
        if (this.skill) {
            alert('This.skill ngonit');
            this.isUpdate = true;
            this.data = this.skill;
            this.fields = this.skill.fields;
            this.desc = this.skill.description;
            console.log(this.data);
        }
    }

    closeModal() {
        this.modalCtrl1.dismiss(null, 'Closed');
    }


    onSubmit() { // PUT & POST Method
        if (this.isUpdate) {
            const obj = JSON.stringify({
                fields: this.fields,
                description: this.desc
            });
            this.service.updateSkill(obj, this.skill.skillID).subscribe(() => {
                this.modalCtrl1.dismiss(this.data, 'UPDATED!');
            });
        } else {
            const obj = JSON.stringify({
                fields: this.fields,
                description: this.desc
            });
            this.service.createSkill(obj).subscribe(response => {
                this.modalCtrl1.dismiss(response, 'Created!');
                console.log('response ' + response);
            });
        }
    }
}

