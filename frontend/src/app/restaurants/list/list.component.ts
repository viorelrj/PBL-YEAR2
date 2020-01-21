import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../../core/services/restaurants.service';
import { AuthentificationService } from '@service/authentification.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  restaurantList: any;

  constructor(
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurantService.getList()
    .subscribe(res => this.restaurantList = res);
  }

}
