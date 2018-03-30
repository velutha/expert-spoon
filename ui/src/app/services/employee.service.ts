import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  uploadEmployees(httpOptions) {
    return this.http.post("/api/upload/employee", httpOptions, {
      observe: "response"
    });
  }
}
