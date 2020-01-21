import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '@service/authentification.service';
import { SocketService } from '@service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookly';

  constructor(
    private router: Router,
    private socketService: SocketService
  ){
    
    this.socketService.bootstrap();
  }
}
