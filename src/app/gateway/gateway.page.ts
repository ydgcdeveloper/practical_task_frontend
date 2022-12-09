import { Gateway } from './../data/gateway.interface';
import { GatewayService } from './../service/gateway/gateway.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateway-page',
  templateUrl: './gateway.page.html',
  styleUrls: ['./gateway.page.css']
})
export class GatewayPage implements OnInit {

  public gateways: Gateway [] = [];

  constructor(private gatewayService: GatewayService) { }

  async ngOnInit() {
    this.gatewayService.getGateways().then((data) => {
      this.gateways = data.data;
      console.log(this.gateways);
    });
  }
}
