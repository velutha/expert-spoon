import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
// import { error } from 'selenium-webdriver';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login = (credentials?) => {
    const url = "http://localhost:3000/api/login";
    
    return this.http.post(url, credentials)
       .map(
         response => {
            console.log(response);
           /*if (response && response['id']) { 
              console.log(response);
              localStorage.setItem('survey-app-token', response['id']);
              //localStorage.setItem('survey-app-token', 'sdasdad12qrasdfwr');
              return true;
           }
           return false;*/
         });
  }

  logout = () => {
    localStorage.removeItem('survey-app-token');
  }

  isLoggedIn =  () => {
    const access_token = localStorage.getItem('survey-app-token');

    if (!access_token) {
      return false;
    }


    // let tokenExpData = jwtHelper.getTokenExpirationDate(access_token),
    //     isExpired = jwtHelper.isTokenExpired(access_token);

    // console.log('date ', tokenExpData);
    // console.log('isexpired ', isExpired);

    return true;

  }

  getToken = () => {
    if (this.isLoggedIn()) {
      return localStorage.getItem('access_token');
    }
    return '';
  }

}
