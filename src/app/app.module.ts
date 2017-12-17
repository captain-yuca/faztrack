import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';



import { FormsModule }   from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { OrderComponent} from './order/order.component';
import { HomeComponent } from './home/home.component';
import { OrderDialogComponent } from './order/order-dialog/order-dialog.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminComponent } from './admin/admin.component';
import { MealCatalogComponent } from './admin/meal-catalog/meal-catalog.component';
import { MealCatalogDialogComponent } from './admin/meal-catalog/meal-catalog-dialog/meal-catalog-dialog.component';
import { CurrentOrdersComponent } from './admin/current-orders/current-orders.component';
import { CurrentOrdersDialogComponent } from './admin/current-orders/current-orders-dialog/current-orders-dialog.component';
import { FavoriteComponent } from './order/favorite/favorite.component';
import { MealsComponent } from './order/meals/meals.component';
import { WeightComponent } from './weight/weight.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FitnessComponent } from './fitness/fitness.component';
import { PastOrdersComponent } from './admin/past-orders/past-orders.component';
import { TransactionDialogComponent } from './admin/past-orders/transaction-dialog/transaction-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ExercisesComponent,
    OrderComponent,
    HomeComponent,
    OrderDialogComponent,
    OrderHistoryComponent,
    AdminComponent,
    MealCatalogComponent,
    MealCatalogDialogComponent,
    CurrentOrdersComponent,
    CurrentOrdersDialogComponent,
    FavoriteComponent,
    MealsComponent,
    WeightComponent,
    ConfirmationComponent,
    FitnessComponent,
    PastOrdersComponent,
    TransactionDialogComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    OrderDialogComponent,
    MealCatalogDialogComponent,
    CurrentOrdersDialogComponent,
    TransactionDialogComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
