import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { AuthentificationComponent } from './authentification.component';
import { AuthentificationSuccessComponent } from './authentification-success/authentification-success.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, AuthentificationComponent, AuthentificationSuccessComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthentificationRoutingModule
  ],
  exports: [LoginComponent]
})
export class AuthentificationModule { }
