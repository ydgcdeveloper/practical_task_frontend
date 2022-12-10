import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGatewayComponent } from './edit-gateway.component';

const routes: Routes = [{ path: '', component: EditGatewayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditGatewayRoutingModule { }
