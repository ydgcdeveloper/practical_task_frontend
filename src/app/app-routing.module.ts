import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) },
  { path: 'gateway', loadChildren: () => import('./gateway/gateway.module').then(m => m.GatewayModule) },
  { path: 'edit-gateway', loadChildren: () => import('./edit-gateway/edit-gateway.module').then(m => m.EditGatewayModule) },
  { path: 'add-gateway', loadChildren: () => import('./add-gateway/add-gateway.module').then(m => m.AddGatewayModule) },
  { path: 'add-device', loadChildren: () => import('./add-device/add-device.module').then(m => m.AddDeviceModule) },
  { path: 'edit-device', loadChildren: () => import('./edit-device/edit-device.module').then(m => m.EditDeviceModule) },
  { path: 'free-device', loadChildren: () => import('./free-device/free-device.module').then(m => m.FreeDeviceModule) },
  { path: '**', component: PageNotFoundComponent }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
