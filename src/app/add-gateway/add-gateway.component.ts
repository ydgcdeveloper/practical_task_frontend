import { Gateway } from './../data/gateway.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GatewayService } from './../service/gateway/gateway.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css']
})
export class AddGatewayComponent implements OnInit {
  gatewayForm?: FormGroup;

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private formBuilder: FormBuilder,
  ) { }

  get name() {
    return this.gatewayForm?.get('name');
  }

  get ipv4() {
    return this.gatewayForm?.get('ipv4');
  }

  // get usn() {
  //   return this.gatewayForm?.get('usn');
  // }

  ngOnInit(): void {
    this.gatewayForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      ipv4: [null, [Validators.required]],
      // usn: [null, [Validators.required]],
    })
  }

  onSubmit() {
    if (this.gatewayForm?.valid) {

      try {

        const gateway: Gateway = {
          ipv4: this.ipv4?.value,
          name: this.name?.value,
          // usn: this.usn?.value
        }

        this.gatewayService.addGateway({ data: gateway }).then((result) => {
          console.log(result);
        })

      } catch (error) {
        console.log(error);
      }
    }
    console.log("onSubmit()");
  }


}
