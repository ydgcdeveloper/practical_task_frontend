import { Gateway } from './../../data/gateway.interface';
import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  @Input() gateway?: Gateway;
  @Input() index?: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async showGateway() {
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     id: this.gateway?._id
    //   },
    //   queryParams: {
    //     id: this.gateway?._id
    //   }
    // };
    // await this.router.navigateByUrl('/edit-gateway', navigationExtras)
    this.router.navigate(['edit-gateway'], { queryParams: { id: this.gateway?._id } })
  }
}
