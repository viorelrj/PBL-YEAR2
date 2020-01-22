import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsModule } from './restaurants.module';


const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    },
    {
        path: ':id',
        component: ItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
