import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { AuthentificationService } from '@service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) { }

  bootstrap() {
    if (this.location.path() != '') { return }

    this.authService.autoLoad().then((userHasSave: boolean) => {
      if (userHasSave) {
        this.router.navigate(['restaurants'])
      } else {
        this.router.navigate(['auth', 'login'])
      }
    })
  }
}
