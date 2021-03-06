import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { IngressEgressModule } from '../ingress-egress/ingress-egress.module';
import { DashboardRoutesModule } from './dashboard-routes.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    IngressEgressModule,
    DashboardRoutesModule,
  ]
})
export class DashboardModule { }
