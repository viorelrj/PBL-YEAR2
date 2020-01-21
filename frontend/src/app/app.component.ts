import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '@service/authentification.service';
// import { AuthentificationService } from 'core/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookly';

  constructor(
    private router: Router,
    private authService: AuthentificationService
  ){}

  ngOnInit() {
    this.authService.autoLoad().then(() => {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['auth'])
      } else {
        this.router.navigate(['restaurants'])
      }
    })
  }
}
