import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthentificationService } from '../../../core/services/authentification.service';
import { RestaurantsService } from '../../../core/services/restaurants.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthentificationService,
    private restaruantsService: RestaurantsService
  ) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([''])
    }
  }
}
