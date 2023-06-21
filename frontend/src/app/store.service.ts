import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import Swal from 'sweetalert2';


/*
*  @description :: Common service to send any AJAX requests.
*/

const apiURL = 'http://localhost:1337';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  url = '';

  email = 'sharmilathirumalai@gmail.com';

  emailStr = '';

  constructor(private http: HttpClient) {

  }

  private handleError(error: HttpErrorResponse) {
    // Error entry point for all AJAX request made using store

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // if (error.status == 403) {
      //   window.location.href = "/home"
      //   return throwError('Something went wrong; please try again later.');
      // }

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
      Swal.fire('Oops..', error.error.message, 'error')

    }
    return throwError('Something went wrong; please try again later.');
  };

  post(endpoint, data = {}) {

    if (endpoint == '/signout') {
      this.email = "";
      sessionStorage.clear();
    }
    else if (endpoint == '/signin' || endpoint == '/user') {
      this.email = data["email"];
      sessionStorage.setItem("email", this.email);
    } else if (endpoint != '/resetpassword' && endpoint != '/forgotpassword' && this.email != "") {
      data["email"] = this.email;
    }
    this.url = `${apiURL}${endpoint}`;
    return this.http.post(this.url, data, httpOptions)
      .pipe(
        tap(data => console.log('Request successful')),
        catchError(this.handleError)
      );
  }

  get(endpoint, data = {}) {
    this.url = `${apiURL}${endpoint}`;
    if (!endpoint.includes('email=') && !endpoint.includes('getDiscussions/')) {
      this.emailStr = (endpoint.indexOf('?') == -1) ? '?email=' : '&email=';
      this.url = this.url + this.emailStr + this.email;
    }


    return this.http.get(this.url, httpOptions)
      .pipe(
        tap(_ => console.log('Request successful')),
        catchError(this.handleError)
      );
  }
}
