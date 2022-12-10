import { Router } from '@angular/router';
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

  constructor(
    private gatewayService: GatewayService,
    private Router: Router
  ) { }

  async ngOnInit() {
    this.gatewayService.getGateways().then((result) => {
      this.gateways = result.data;
      console.log(this.gateways);
    });
  }

  goToAdd(){
    this.Router.navigate(['add-gateway']);
  }
}
