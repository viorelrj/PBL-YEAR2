import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {LoginObjectModel, LoginResponseModel} from '../models/authentification-model';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'http://localhost:8080/api/users/';

  private state = {
    isLoggedIn: false,
    userName: null as String,
    sessionToken: null as String
  }

  private userData: LoginResponseModel;

  isLoggedIn(): Boolean {
    return this.state.isLoggedIn;
  }

  getUserName(): String {
    return this.state.userName;
  }

  getSessionUserId(): number {
    return this.userData.id;
  }

  getSessionToken(): String {
    return this.state.sessionToken;
  }

  updateLoggedState(isLoggedIn, login, sessionToken) {
    this.state.isLoggedIn = isLoggedIn;
    this.state.userName = login;
    // this.state.sessionToken = sessionToken;
  }

  logIn(loginData: LoginObjectModel) {

    return this.http.post<LoginResponseModel>(
      this.apiURL + 'login',
      {
        username: loginData.login,
        password: loginData.password
      }
    )
  }

  saveUser(user: LoginResponseModel) {
    this.userData = user;
  }

  getUserData(id) {
    return this.http.get<LoginResponseModel>(
      this.apiURL + id
    )
  }

  register(obj) {
    return this.http.post(
      this.apiURL + 'users',
      obj,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  updateUserData(id, formObject) {
    for (var propName in formObject) { 
      if (formObject[propName] === "") {
        delete formObject[propName];
      }
    }
    return this.http.put(
      this.apiURL + id,
      formObject
    );
  }
}
