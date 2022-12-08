import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './component/device/device.component';
import { GatewayComponent } from './component/gateway/gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    GatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
