import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/api";

  getQuestions(enterpriseId, employeeId) {
    return this.http.get(this.url + `/question/${enterpriseId}/${employeeId}`, {
      observe: "response"
    });
  }

  uploadQuestions(httpOptions) {
    return this.http.post(this.url + "/upload/questions", httpOptions, {
      observe: "response"
    });
  }
}
