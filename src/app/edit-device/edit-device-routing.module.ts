import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDeviceComponent } from './edit-device.component';

const routes: Routes = [{ path: '', component: EditDeviceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDeviceRoutingModule { }
