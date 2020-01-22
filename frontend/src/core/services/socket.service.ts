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

  async bootstrap() {    
    this.authService.autoLoad();
    const userHasSave = await this.authService.ready();
    
    if (this.location.path() != '') { return }

    if (userHasSave) {
      this.router.navigate(['restaurants'])
    } else {
      this.router.navigate(['auth', 'login'])
    }
  }
}
