import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegistrationComponent } from './authentification/registration/registration.component';
import { AuthentificationSuccessComponent } from './authentification/authentification-success/authentification-success.component';
import { UserComponent } from './user/user/user.component';
import { ListComponent } from './restaurants/list/list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'login-success', component: UserComponent},
  {path: 'register-success', component: UserComponent},
  {path: 'user', component: UserComponent},
  {path: 'list', component: ListComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
