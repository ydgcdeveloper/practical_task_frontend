import { DeviceService } from './../service/device/device.service';
import { GatewayService } from './../service/gateway/gateway.service';
import { Gateway } from './../data/gateway.interface';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Device } from '../data/device.interface';

@Component({
  selector: 'app-edit-gateway',
  templateUrl: './edit-gateway.component.html',
  styleUrls: ['./edit-gateway.component.css']
})
export class EditGatewayComponent implements OnInit {
  id?: string;
  gateway?: Gateway;
  gatewayForm?: FormGroup;
  devicesCount: number = 0;

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private deviceService: DeviceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    // const data = this.router.getCurrentNavigation()?.extras?.state;
    // if (data) {
    //   this.id = data['id']
    // } else {
    //   // this.router.navigate(['/gateway'])
    // }
    this.id = this.activatedRoute.snapshot?.queryParams['id'];
    if (!this.id) {
      this.router.navigate(['/gateway'])
    }
  }

  get name() {
    return this.gatewayForm?.get('name');
  }

  get ipv4() {
    return this.gatewayForm?.get('ipv4');
  }

  get usn() {
    return this.gatewayForm?.get('usn');
  }

  async ngOnInit() {
    if (this.id) {
      this.gateway = ((await this.gatewayService.getGateway(this.id)).data)[0] as Gateway;
    }

    if (this.gateway) {
      this.gatewayForm = this.formBuilder.group({
        name: [this.gateway?.name, [Validators.required]],
        ipv4: [this.gateway?.ipv4, [Validators.required, Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]],
        usn: [this.gateway?.usn, [Validators.required]],
      })
      this.devicesCount = this.gateway?.devices?.length as number || 0;
    } else {
      this.router.navigate(['gateway'])
    }
  }

  editGateway() {
    if (this.gatewayForm?.valid) {

      try {

        const gateway: Gateway = {
          ipv4: this.ipv4?.value,
          name: this.name?.value,
        }

        const data = {
          query: {
            _id: this.gateway?._id
          },
          set: gateway
        }

        this.gatewayService.editGateway({ data }).then((result) => {
          if (result?.data.acknowledged && result?.data.modifiedCount) {
            this.router.navigate(['gateway'])
          }
          console.log(result);
        })

      } catch (error) {
        console.log(error);
      }
    }
    console.log("editGateway()");
  }

  deleteGateway() {
    try {

      let deleteResult = confirm("Are you sure to delete this gateway?");

      if (deleteResult) {

        const data = {
          query: {
            _id: this.gateway?._id
          },
        }

        this.gatewayService.deleteGateway({ data }).then((result) => {
          console.log(result);
          if (result?.data.acknowledged && result?.data.deletedCount) {
            this.router.navigate(['gateway'])
          }
        })
      }

    } catch (error) {
      console.log(error);
    }
    console.log('deleteGateway()');
  }

  goToDevice(id: string) {
    this.router.navigate(['edit-device'], { queryParams: { id } })
  }

  removeDevice(id: string) {
    let removeDevice = confirm("Do you want to remove this device from the gateway?");

    if (removeDevice) {
      let devices = this.gateway?.devices?.filter((device) => {
        return device.id != id;
      })

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
              gateway: null
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

  goToFree(){
    this.router.navigate(['free-device'], { queryParams: { id: this.gateway?._id } })
  }
}
