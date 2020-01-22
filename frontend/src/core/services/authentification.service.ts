import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {LoginObjectModel, LoginResponseModel, RegistrationModel} from '../models/authentification-model';
import { async } from '@angular/core/testing';
import { ExternalPromise } from '@core/utils';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'http://localhost:4200/api/users/';
  
  
  private state = {
    authPromise: new ExternalPromise<Boolean>(),
    isLoggedIn: false,
    ready: new ExternalPromise,
    userName: null as string,
    sessionToken: null as string
  };

  private userData: LoginResponseModel;

  ready() {
    return this.state.authPromise;
  }

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
  }

  getUserData() {
    return this.userData;
  }

  register(obj: RegistrationModel) {
    return this.http.post(this.apiURL, obj);
  }

  updateUserData(id, formObject) {
    delete formObject.confirmpassword;
    formObject.password = 'root1';
    return this.http.put(
      this.apiURL + id,
      formObject
    );
  }

  autoLoad() {
    if (!!!localStorage.getItem('userId')) {
      this.state.authPromise.resolve(false);
    } else {
      this.fetchUserById(localStorage.getItem('userId')).subscribe((res: LoginResponseModel) => {
        this.saveUser(res);
        this.updateLoggedState(res.id, res.username);
        this.state.authPromise.resolve(true);
      })
    }
  }
}
