import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../core/services/authentification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.authService.register(f.value)
      .subscribe(() => this.router.navigate(['register-success']));
  }

}
