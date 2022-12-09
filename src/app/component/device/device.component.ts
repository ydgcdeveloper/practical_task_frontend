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

  constructor() { }

  ngOnInit(): void {
  }

}
