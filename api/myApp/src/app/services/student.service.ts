import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Student {
  id: string;
  name: string;
  jobTitle: string;
  careerDesc: string;
  imageUrl: string;
}



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost/crud_api/api/studentss';
  constructor(private  http: HttpClient) { }

  getAll() {
    return this.http.get<[Student]>(this.url);
  }



  get(id: string ) {
    return this.http.get<Student>(this.url + '/' + id);
  }


}

