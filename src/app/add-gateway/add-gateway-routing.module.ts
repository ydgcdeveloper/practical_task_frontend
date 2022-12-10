import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGatewayComponent } from './add-gateway.component';

const routes: Routes = [{ path: '', component: AddGatewayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddGatewayRoutingModule { }
