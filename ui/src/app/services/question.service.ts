import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  
  constructor(private http:HttpClient) { }

  getQuestions() {
  return this.http.get('/api/question/asdf/');
  }  

  uploadQuestions(httpOptions){
    this.http.post('/api/upload',httpOptions).subscribe(response =>{
        console.log(response);
    });
  }
}
