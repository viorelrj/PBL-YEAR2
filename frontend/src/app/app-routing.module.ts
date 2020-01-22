import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegistrationComponent } from './authentification/registration/registration.component';
import { AuthentificationSuccessComponent } from './authentification/authentification-success/authentification-success.component';
import { UserComponent } from './user/user/user.component';
import { OrdersComponent } from './user/orders/orders.component';
import { ListComponent } from './restaurants/list/list.component';
import { ItemComponent } from './restaurants/item/item.component';
import { BookingComponent } from './booking/booking/booking.component';


// const routes: Routes = [
//   {path: 'login-success', component: ListComponent},
//   {path: 'register-success', component: UserComponent},
//   {path: 'user/:id', component: UserComponent},
//   {path: 'user/:id/bookings', component: OrdersComponent},
//   {path: 'list', component: ListComponent},
//   {path: 'list/restaurant/:id', component: ItemComponent},
//   {path: 'list/restaurant/:id/book', component: BookingComponent},
//   {path: '**', component: AppComponent}
// ];

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'auth', loadChildren: () => import('./authentification/authentification.module').then(mod => mod.AuthentificationModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule) },
  { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(mod => mod.RestaurantsModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(mod => mod.BookingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
