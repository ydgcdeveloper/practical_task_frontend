import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeDeviceRoutingModule } from './free-device-routing.module';
import { FreeDeviceComponent } from './free-device.component';


@NgModule({
  declarations: [
    FreeDeviceComponent
  ],
  imports: [
    CommonModule,
    FreeDeviceRoutingModule
  ]
})
export class FreeDeviceModule { }
