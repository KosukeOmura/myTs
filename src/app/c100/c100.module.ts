import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C100RoutingModule } from './c100-routing.module';
import { C100Component } from './c100.component';


@NgModule({
  declarations: [
    C100Component
  ],
  imports: [
    CommonModule,
    C100RoutingModule
  ]
})
export class C100Module { }
