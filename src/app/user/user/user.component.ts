import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  userData = {
    avatarURL: 'https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/people/cover_images/samuel_l_jackson-gt.jpg?itok=Ydcq5zWL&c=4eef40883dad65bfd37e02e25c172670',
    firstName: 'Samuel L.',
    lastName: 'Jackson',
  }



  ngOnInit() {
  }

}
