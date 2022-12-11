import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from './../service/device/device.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Device } from './../data/device.interface';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {
  id?: string;
  device?: Device;
  deviceForm?: FormGroup;

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    // const data = this.router.getCurrentNavigation()?.extras?.state;
    // if (data) {
    //   this.id = data['id']
    // } else {
    //   // this.router.navigate(['/device'])
    // }
    this.id = this.activatedRoute.snapshot?.queryParams['id'];
    if (!this.id) {
      this.router.navigate(['/device'])
    }
  }

  get vendor() {
    return this.deviceForm?.get('vendor');
  }

  get status() {
    return this.deviceForm?.get('status');
  }

  async ngOnInit() {
    if (this.id) {
      this.device = ((await this.deviceService.getDevice(this.id)).data)[0] as Device;
    }

    if (this.device) {
      this.deviceForm = this.formBuilder.group({
        vendor: [this.device?.vendor, [Validators.required]],
        status: [this.device?.status, [Validators.required]],
        created: [formatDate(this.device?.created as string, 'yyyy/MM/dd hh:mm:ss', 'en-US'), [Validators.required]],
      })
    } else {
      this.router.navigate(['device'])
    }
  }

  updateStatus(value: string) {
    this.status?.setValue(value)
  }

  editDevice() {
    if (this.deviceForm?.valid) {

      try {

        const device: Device = {
          vendor: this.vendor?.value,
          status: this.status?.value,
        }

        const data = {
          query: {
            _id: this.device?._id
          },
          set: device
        }

        this.deviceService.editDevice({ data }).then((result) => {
          if (result?.data.acknowledged && result?.data.modifiedCount) {
            this.router.navigate(['device'])
          }
          console.log(result);
        })

      } catch (error) {
        console.log(error);
      }
    }
    console.log("editDevice()");
  }

  deleteDevice() {
    try {

      let deleteResult = confirm("Are you sure to delete this device?");

      if (deleteResult) {

        const data = {
          query: {
            _id: this.device?._id
          },
        }

        this.deviceService.deleteDevice({ data }).then((result) => {
          console.log(result);
          if (result?.data.acknowledged && result?.data.deletedCount) {
            this.router.navigate(['device'])
          }
        })
      }

    } catch (error) {
      console.log(error);
    }
    console.log('deleteDevice()');
  }

}
