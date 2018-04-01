import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AnswerService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/api";
  postAnswers(answers) {
    answers.forEach(answer => {
      let httpOptions = {
        questionId: answer.questionId,
        revieweeId: answer.revieweeId,
        choice: answer.choice
      };

      this.http.post(this.url + "/answer", httpOptions).subscribe(response => {
        console.log("answer submitted");
      });
    });
    //console.log(answers);
  }

  getAnswers(revieweeId) {
    return this.http.get(this.url + `/answer/${revieweeId}`, {
      observe: "response"
    });
  }
}
