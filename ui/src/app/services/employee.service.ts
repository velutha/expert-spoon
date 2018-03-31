import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/api";

  uploadEmployees(httpOptions) {
    return this.http.post(this.url + "/upload/employees", httpOptions, {
      observe: "response"
    });
  }

  getEmployees(enterpriseId) {
    return this.http.get(this.url + `/get/employee/${enterpriseId}`, {
      observe: "response"
    });
  }
}
