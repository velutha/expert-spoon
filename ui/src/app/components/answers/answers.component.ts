import { Component, OnInit } from "@angular/core";
import { AnswerService } from "../../services/answer.service";
import { EmployeeService } from "../../services/employee.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "answers",
  templateUrl: "./answers.component.html",
  styleUrls: ["./answers.component.css"]
})
export class AnswersComponent implements OnInit {
  enterpriseId = "asdf";
  employees;
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
  revieweeId;
  reviewee;
  constructor(
    private service: AnswerService,
    private employeeService: EmployeeService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees(this.enterpriseId).subscribe(
      response => {
        if (response.body) {
          this.employees = response.body;
        } else {
          this.snackBar.open("Employees not uploaded yet", "OK", {
            duration: 3000
          });
        }
      },
      (error: Response) => {
        console.log(error);
        switch (error.status) {
          case 404:
            this.snackBar.open("Employees not found", "OK", {
              duration: 3000
            });
          default:
            this.snackBar.open("Something went wrong", "OK", {
              duration: 3000
            });
        }
      }
    );
  }

  onSelect() {
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
        } else {
          this.revieweeId = "";
          this.errorMessage = "No feedback for this employee yet!";
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

    this.employees.forEach(employee => {
      if (employee.employeeId === this.revieweeId) {
        this.reviewee = employee;
      }
    });
    console.log(this.reviewee);
  }
}
