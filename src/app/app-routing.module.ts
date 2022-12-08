import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) },
  { path: 'gateway', loadChildren: () => import('./gateway/gateway.module').then(m => m.GatewayModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
