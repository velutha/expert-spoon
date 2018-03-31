import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "employee-upload",
  templateUrl: "./employee-upload.component.html",
  styleUrls: ["./employee-upload.component.css"]
})
export class EmployeeUploadComponent implements OnInit {
  fileName;
  data;
  enterpriseId = "asdf";
  constructor(private service: EmployeeService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    let fileInput = document.getElementById("employee-file-input");
    let customInput = document.getElementById("employee-custom-file-input");

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
  }

  encodeFile() {
    let doc = document.getElementById(
      "employee-file-input"
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
    let options = {
      data: this.data,
      fileName: this.fileName,
      enterpriseId: this.enterpriseId
    };

    this.service.uploadEmployees(options).subscribe(response => {
      //console.log(response);
      if (response.status === 201) {
        this.snackBar.open("Employees uploaded!", "OK", {
          duration: 2000
        });
      } else {
        this.snackBar.open("Something went wrong", "OK", {
          duration: 2000
        });
      }
      this.data = "";
      this.fileName = "";
      document.getElementById("employee-custom-file-input").innerText =
        "Choose file";
    });
    //console.log(this.enterpriseId,this.fileName,this.data);
  }
}
