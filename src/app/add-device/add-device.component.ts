import { Device } from './../data/device.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from './../service/device/device.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  deviceForm?: FormGroup;

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private formBuilder: FormBuilder,
  ) { }

  get vendor() {
    return this.deviceForm?.get('vendor');
  }

  get status() {
    return this.deviceForm?.get('status');
  }

  ngOnInit(): void {
    this.deviceForm = this.formBuilder.group({
      vendor: [null, [Validators.required]],
      status: ['OFFLINE', [Validators.required,]],
    })
  }

  updateStatus(value: string) {
    this.status?.setValue(value)
  }

  onSubmit() {
    if (this.deviceForm?.valid) {

      try {

        const device: Device = {
          vendor: this.vendor?.value,
          status: this.status?.value,
        }

        this.deviceService.addDevice({ data: device }).then((result) => {
          if (result?.data.acknowledged && result?.data.insertedId) {
            this.router.navigate(['device']);
          }
        })

      } catch (error) {
        console.log(error);
      }
    }
    console.log("onSubmit()");
  }

}
