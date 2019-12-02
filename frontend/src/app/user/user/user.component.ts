import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthentificationService } from '../../../core/services/authentification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id: String;
  userData = {} ;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthentificationService
  ) { }




  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    // this.authService.get`(this.id)
    this.authService.getUserData(this.id)
    .subscribe(res => this.userData = res)
  }
}
