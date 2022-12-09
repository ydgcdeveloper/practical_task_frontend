import { Gateway } from './../../data/gateway.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  @Input() gateway?: Gateway;
  @Input() index?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
