import { Component, OnInit } from "@angular/core";
import { QuestionService } from "../../services/question.service";
import { MatSnackBar } from "@angular/material";
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: "question-upload",
  templateUrl: "./question-upload.component.html",
  styleUrls: ["./question-upload.component.css"]
})
export class QuestionUploadComponent implements OnInit {
  enterpriseId = "asdf";
  employeeId;
  fileName;
  data;
  employees;
  showSpinner;
  constructor(
    private service: QuestionService,
    private employeeService: EmployeeService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    let fileInput = document.getElementById("question-file-input");
    let customInput = document.getElementById("question-custom-file-input");

    customInput.addEventListener("click", () => {
      fileInput.click();
      //console.log(fileInput);
    });

    fileInput.addEventListener("change", event => {
      this.fileName = (event.target as HTMLInputElement).value.replace(
        /^.*[\\\/]/,
        ""
      );
      customInput.innerText = this.fileName;
    });

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

  encodeFile() {
    let doc = document.getElementById(
      "question-file-input"
    ) as HTMLInputElement;
    let file = doc.files[0];

    let dataPromise = new Promise((resolve, reject) => {
      let reader = new FileReader() as any;
      reader.onload = function(event) {
        resolve(reader.result.split(",")[1]);
      };
      reader.onerror = function(error) {
        reject(error);
        console.log("Error: ", error);
      };

      reader.readAsDataURL(file);
    }).then(base64 => {
      this.data = base64;
    });
  }

  onUpload() {
    this.showSpinner = true;
    let options = {
      entId: this.enterpriseId,
      employeeId: this.employeeId,
      data: this.data,
      fileName: this.fileName
    };
    console.log(options);
    this.service.uploadQuestions(options).subscribe(
      response => {
        //console.log(response);
        if (response.status === 201) {
          this.snackBar.open("Questions uploaded!", "OK", {
            duration: 3000
          });
        }

        this.data = "";
        this.fileName = "";
        this.employeeId = "";
        this.showSpinner = false;
        document.getElementById("question-custom-file-input").innerText =
          "Choose file";
      },
      (error: Response) => {
        console.log(error);
        switch (error.status) {
          case 404:
            this.snackBar.open("Requested resource not found", "OK", {
              duration: 3000
            });
          default:
            this.snackBar.open("Something went wrong", "OK", {
              duration: 3000
            });
        }

        this.showSpinner = false;
      }
    );
  }
}
