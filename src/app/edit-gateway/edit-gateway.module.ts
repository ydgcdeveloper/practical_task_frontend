import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EditGatewayRoutingModule } from './edit-gateway-routing.module';
import { EditGatewayComponent } from './edit-gateway.component';


@NgModule({
  declarations: [
    EditGatewayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditGatewayRoutingModule,
    ReactiveFormsModule
  ],
})
export class EditGatewayModule { }
