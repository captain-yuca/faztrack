import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { OrderComponent } from './order/order.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminComponent } from './admin/admin.component';
import { MealCatalogComponent } from './admin/meal-catalog/meal-catalog.component';
import { CurrentOrdersComponent } from './admin/current-orders/current-orders.component';
import { MealsComponent } from './order/meals/meals.component';
import { FavoriteComponent } from './order/favorite/favorite.component';
import { WeightComponent } from './weight/weight.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FitnessComponent } from './fitness/fitness.component';
import { PastOrdersComponent } from './admin/past-orders/past-orders.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign', component: AuthComponent },
  { path: 'weight', component: WeightComponent},
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'fitness', component: FitnessComponent},
  { path: 'order', component: OrderComponent, children:[
    {path:'', children:[
      {path:'meals', component:MealsComponent},
      {path: 'favorites', component:FavoriteComponent},
      {path: 'history', component:OrderHistoryComponent},
      {path: '**', pathMatch:'full', redirectTo:'meals'}
    ]}
  ]},
  { path: 'exercises', component: ExercisesComponent},
  { path: 'order-history', component: OrderHistoryComponent},
  { path: 'admin', component: AdminComponent, children:[
    {
      path:'', children:[

        {
          path:'orders', component: CurrentOrdersComponent
        },
        {
          path:'history', component: PastOrdersComponent
        },
        {
          path:'', component: MealCatalogComponent
        },
        { path: '**', pathMatch: 'full', redirectTo: '' },
      ]
    }


  ]
},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
