import { GatewayComponent } from './../component/gateway/gateway.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewayRoutingModule } from './gateway-routing.module';
import { GatewayPage } from './gateway.page';


@NgModule({
  declarations: [
    GatewayPage,
    GatewayComponent
  ],
  imports: [
    CommonModule,
    GatewayRoutingModule
  ]
})
export class GatewayModule { }
