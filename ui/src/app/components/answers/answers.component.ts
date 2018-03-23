import { Component, OnInit } from "@angular/core";
import { AnswerService } from "../../services/answer.service";

@Component({
  selector: "answers",
  templateUrl: "./answers.component.html",
  styleUrls: ["./answers.component.css"]
})
export class AnswersComponent implements OnInit {
  errorMessage;
  sections = [];
  answers = {};
  choiceObject = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4
  };
  revieweeId = "test-user";
  constructor(private service: AnswerService) {}

  ngOnInit() {
    this.service.getAnswers(this.revieweeId).subscribe(
      response => {
        //console.log(response);
        if (
          response.status === 200 &&
          Object.keys(response.body).length !== 0
        ) {
          for (let section in response.body) {
            this.sections.push(section);
          }
          this.answers = response.body;
          //console.log(this.answers);
        }
      },
      error => {
        console.log(error);
        switch (error.status) {
          case 404:
            this.errorMessage = "Answers not found";
            break;
          default:
            this.errorMessage = "Oops..Something went wrong!";
        }
      }
    );
  }
}
