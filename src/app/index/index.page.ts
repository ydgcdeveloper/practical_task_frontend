import { DeviceService } from './../service/device/device.service';
import { Device } from './../data/device.interface';
import { Gateway } from './../data/gateway.interface';
import { GatewayService } from './../service/gateway/gateway.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.css']
})
export class IndexPage implements OnInit {
  public gateways: Gateway [] = [];
  public devices: Device [] = [];

  title = 'My Gateways';

  constructor(
    private gatewayService: GatewayService,
    private deviceService: DeviceService,
  ) { }

  ngOnInit(): void {
    this.gatewayService.getGateways().then((result) => {
      this.gateways = result.data;
    });

    this.deviceService.getDevices().then((result) => {
      this.devices = result.data;
    });
  }

}
