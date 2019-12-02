import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from '../../../core/services/restaurants.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: String;
  restaurant = {};

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.restaurantsService.getRestaurant(this.id)
    .subscribe(res => this.restaurant = res);
  }

}
