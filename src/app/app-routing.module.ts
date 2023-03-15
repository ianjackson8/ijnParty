import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
