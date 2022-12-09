import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DevicePage } from './device.page';
import { DeviceComponent } from '../component/device/device.component';


@NgModule({
  declarations: [
    DevicePage,
    DeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
  ]
})
export class DeviceModule { }
