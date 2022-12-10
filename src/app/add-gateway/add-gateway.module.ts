import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddGatewayRoutingModule } from './add-gateway-routing.module';
import { AddGatewayComponent } from './add-gateway.component';


@NgModule({
  declarations: [
    AddGatewayComponent
  ],
  imports: [
    CommonModule,
    AddGatewayRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddGatewayModule { }
