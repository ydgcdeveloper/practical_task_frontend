import { Router, NavigationExtras } from '@angular/router';
import { Device } from './../../data/device.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  @Input() device?: Device;
  @Input() index?: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async showDevice() {
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     id: this.device?._id
    //   },
    // };
    // await this.router.navigateByUrl('/edit-device', navigationExtras)
    this.router.navigate(['edit-device'], { queryParams: { id: this.device?._id } })
  }
}
