import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnswerService {

  constructor(private http:HttpClient) { }
  postAnswers(answers){
    
    answers.forEach(answer =>{
      let httpOptions = {
        questionId: answer.questionId,
        revieweeId: 'test-user',
        choice: answer.choice,
      }
      
      this.http.post('http://localhost:3000/api/answer',httpOptions).subscribe(response =>{
        console.log('answer submitted');
      });
    })
    console.log(answers);
    

}

}
