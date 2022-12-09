import { Device } from './../data/device.interface';
import { DeviceService } from './../service/device/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-page',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.css']
})
export class DevicePage implements OnInit {

  public devices: Device [] = [];

  constructor(private deviceService: DeviceService) { }

  async ngOnInit() {
    this.deviceService.getDevices().then((data) => {
      this.devices = data.data;
      console.log(this.devices);
    });
  }

}
