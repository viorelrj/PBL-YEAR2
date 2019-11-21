import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../core/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(f: NgForm) {
    this.authService.logIn(f.value)
    .subscribe(data => {
      this.authService.updateLoggedState(true, f.value.username, data);
    })
  }

}
