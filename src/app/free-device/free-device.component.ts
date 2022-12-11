import { Gateway } from './../data/gateway.interface';
import { GatewayService } from './../service/gateway/gateway.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DeviceService } from './../service/device/device.service';
import { Device } from './../data/device.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-device',
  templateUrl: './free-device.component.html',
  styleUrls: ['./free-device.component.css']
})
export class FreeDeviceComponent implements OnInit {

  public freeDevices: Device[] = [];
  gateway?: Gateway;
  id?: string;

  constructor(
    private gatewayService: GatewayService,
    private deviceService: DeviceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot?.queryParams['id'];
  }

  async ngOnInit() {
    this.deviceService.getDevices().then((result) => {
      this.freeDevices = result.data;
      this.freeDevices = this.freeDevices.filter((device) => {
        return device.gateway == null;
      })
      console.log(this.freeDevices);
    });

    if (this.id) {
      this.gateway = ((await this.gatewayService.getGateway(this.id)).data)[0] as Gateway;
    }

  }

  addDeviceToGateway(id: string | undefined) {
    let addDevice = confirm("Do you want to add this device to the gateway?");

    if (addDevice && id) {
      let devices = this.gateway?.devices;
      devices?.push({id});

      try {

        const gateway: Gateway = {
          devices
        }

        const data = {
          query: {
            _id: this.gateway?._id
          },
          set: gateway
        }

        this.gatewayService.editGateway({ data }).then((result) => {
          if (result?.data.acknowledged && result?.data.modifiedCount) {

            const device: Device = {
              gateway: {
                id: this.gateway?._id
              }
            }

            const data = {
              query: {
                _id: id
              },
              set: device
            }
            this.deviceService.editDevice({ data }).then((result) => {
              if (result?.data.acknowledged && result?.data.modifiedCount) {
                window.location.reload()
              }
            })
          }
          console.log(result);
        })

      } catch (error) {
        console.log(error);
      }
    }
  }
}
