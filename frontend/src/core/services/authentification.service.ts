import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {LoginObjectModel, LoginResponseModel, RegistrationModel} from '../models/authentification-model';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'http://localhost:4200/api/users/';

  private state = {
    isLoggedIn: false,
    userName: null as string,
    sessionToken: null as string
  };

  private userData: LoginResponseModel;

  isLoggedIn(): boolean {
    return this.state.isLoggedIn;
  }

  getUserName(): string {
    return this.state.userName;
  }

  fetchUserById(id: string): Observable<LoginResponseModel> {
    return this.http.get<LoginResponseModel>(this.apiURL + `/${id}`);
  }

  getSessionUserId(): number {
    return this.userData.id;
  }

  getSessionToken(): string {
    return this.state.sessionToken;
  }

  updateLoggedState(isLoggedIn, login) {
    this.state.isLoggedIn = isLoggedIn;
    this.state.userName = login;
  }

  logIn(loginData: LoginObjectModel) {
    return this.http.post<LoginResponseModel>(
      this.apiURL + 'login',
      {
        username: loginData.login,
        password: loginData.password
      }
    );
  }

  saveUser(user: LoginResponseModel) {
    this.userData = user;
    localStorage.setItem('userId', user.id.toString());
    console.log(localStorage.getItem('userId'))
  }

  getUserData(id) {
    return this.http.get<LoginResponseModel>(
      this.apiURL + id
    );
  }

  register(obj: RegistrationModel) {
    return this.http.post(this.apiURL, obj);
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

  autoLoad() {
    const self = this;

    function resolver(resolve, reject) {
      if (!!!localStorage.getItem('userId')) {
        resolve(false);
        return null;
      }

      self.fetchUserById(localStorage.getItem('userId')).subscribe(
        (res: LoginResponseModel) => {
          self.saveUser(res);
          self.updateLoggedState(res.id, res.username);
          resolve(true);
          return null;
        }
      )
    }

    return new Promise(resolver);
  }
}
