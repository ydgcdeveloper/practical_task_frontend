import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDeviceRoutingModule } from './edit-device-routing.module';
import { EditDeviceComponent } from './edit-device.component';


@NgModule({
  declarations: [
    EditDeviceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditDeviceRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditDeviceModule { }
