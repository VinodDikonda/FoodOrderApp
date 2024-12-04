import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodReportComponent } from './food-report/food-report.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  { path: 'food-report/:month', component: FoodReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
