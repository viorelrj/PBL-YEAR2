import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { AuthentificationService } from '../../../core/services/authentification.service';

import { LoginResponseModel } from '../../../core/models/authentification-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {
  id: String;
  public userData = null;
  public confirmpassword: string;
  
  constructor(
    private route: ActivatedRoute,
    private authService: AuthentificationService
  ) { }

  async ngOnInit() {
    await this.authService.ready();
    
    this.id = this.authService.getSessionUserId().toString();
    this.userData = this.authService.getUserData();
    this.userData.confirmpassword = this.userData.password;
  }

  public onSubmit(f: NgForm) {
    const form = f.value;

    if (form.password !== form.confirmpassword) {
      alert('Passwords should be matching');
      return null;
    }

    for (let key in form) {
      if (!form[key]) {
        alert('All fields should be completed');
        return null;
      }
    }

    this.authService.updateUserData(this.id, f.value)
    .subscribe(res => alert('Preferences have been updated'));
  }
}
