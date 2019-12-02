import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {LoginObjectModel} from '../models/login-object-model';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'http://localhost:8080/api/';

  private state = {
    isLoggedIn: false,
    userName: null as String,
    sessionToken: null as String
  }

  isLoggedIn() {
    return this.state.isLoggedIn;
  }

  getUserName() {
    return this.state.userName;
  }

  getSessionToken() {
    return this.state.sessionToken;
  }

  updateLoggedState(isLoggedIn, login, sessionToken) {
    this.state.isLoggedIn = isLoggedIn;
    this.state.userName = login;
    // this.state.sessionToken = sessionToken;
  }

  logIn(loginData: LoginObjectModel) {
    console.log(loginData)
    return this.http.post(
      this.apiURL + 'users/login',
      {
        username: loginData.login,
        password: loginData.password
      }
    )
  }

  getUserData(id) {
    return this.http.get(
      this.apiURL + 'users/' + id
    )
  }

  register(obj) {
    return this.http.post(
      this.apiURL + 'user',
      obj,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
