import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C100Component } from './c100.component';

const routes: Routes = [
  {
    path:'',
    component: C100Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C100RoutingModule { }
