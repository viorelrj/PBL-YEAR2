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
    let form = f.value;

    for (let key in form) {
      if (!form[key]) {
        alert('All fields should be completed');
        return null;
      }
    }

    if (form.password !== form.confirmpassword) {
      alert('Passwords should be matching');
      return null;
    }

    this.authService.register(f.value)
    .subscribe((re) => this.router.navigate(['/restaurants']));
  }

}
