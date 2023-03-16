import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ViewAttendiesComponent } from './view-attendies/view-attendies.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    title: "You're Invited!"
  },
  {
    path: "confirmed",
    component: ConfirmedComponent,
    title: "Confirmed!"
  },
  {
    path: "view",
    component: ViewAttendiesComponent,
    title: "View"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
