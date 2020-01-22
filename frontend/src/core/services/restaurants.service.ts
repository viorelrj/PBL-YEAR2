import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'http://localhost:4200/api/';

  getList() {
    return this.http.get(
      this.apiURL + 'restaurants'
    );
  }

  getRestaurant(id) {
    return this.http.get(
      this.apiURL + 'restaurants/' + id
    )
  }
}
