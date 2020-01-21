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
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }

    this.authService.logIn(f.value)
    .subscribe(
      data => {
        this.authService.saveUser(data);
        this.router.navigate(['']);
      },
      error => this.router.navigate(['auth'])
    )
  }
}
