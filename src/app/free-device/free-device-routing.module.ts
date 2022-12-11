import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeDeviceComponent } from './free-device.component';

const routes: Routes = [{ path: '', component: FreeDeviceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeDeviceRoutingModule { }
