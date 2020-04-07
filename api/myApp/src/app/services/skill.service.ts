import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



export interface Skills {
  skillID: string;
  fields: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private urlSkill = 'http://localhost/crud_api/api/skills';
  constructor(private  http: HttpClient) { }


  getAllSkills() {
    console.log('GETALLSKILLS ENTER');
    return this.http.get<[Skills]>(this.urlSkill);
  }


  getSkill(skillID: string) {
    console.log('getSkill ENter');
    return this.http.get<Skills>(this.urlSkill + '/' + skillID);
  }


  createSkill(skills) {
    console.log('createSkill enter');
    return this.http.post(this.urlSkill, skills);
  }



  updateSkill(skills, skillID: string) {
    alert('Entered Skill!');
    return this.http.put(this.urlSkill + '/' + skillID , skills);
  }



  removeSkillService(skillID: string) {
    console.log('remove enter!');
    console.log(skillID);

    return this.http.delete(this.urlSkill + '/' + skillID);
  }
}
