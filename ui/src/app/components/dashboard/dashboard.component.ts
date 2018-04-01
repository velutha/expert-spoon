import { Component, OnInit } from "@angular/core";
import { QuestionUploadComponent } from "../question-upload/question-upload.component";
import { EmployeeUploadComponent } from "../employee-upload/employee-upload.component";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  uploadEmployees = true;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.uploadEmployees = !this.uploadEmployees;
  }
}
