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
  public userData = null as LoginResponseModel;
  

  constructor(
    private route: ActivatedRoute,
    private authService: AuthentificationService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.authService.getUserData(this.id)
    .subscribe((res:LoginResponseModel) => this.userData = res);
  }

  public onSubmit(f: NgForm) {
    this.authService.updateUserData(this.id, f.value)
    .subscribe(res => console.log(res));
  }
}
