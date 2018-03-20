import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get("http://localhost:3000/api/question/asdf/", {
      observe: "response"
    });
  }

  uploadQuestions(httpOptions) {
    return this.http.post("/api/upload", httpOptions, { observe: "response" });
  }
}
