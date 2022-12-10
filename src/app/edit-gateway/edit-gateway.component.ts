import { GatewayService } from './../service/gateway/gateway.service';
import { Gateway } from './../data/gateway.interface';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-gateway',
  templateUrl: './edit-gateway.component.html',
  styleUrls: ['./edit-gateway.component.css']
})
export class EditGatewayComponent implements OnInit {
  id?: string;
  gateway?: Gateway;
  gatewayForm?: FormGroup;

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
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
        ipv4: [this.gateway?.ipv4, [Validators.required]],
        usn: [this.gateway?.usn, [Validators.required]],
      })
    }
  }

  onSubmit() {
    if (this.gatewayForm?.valid) {

      try {

        const gateway: Gateway = {
          ipv4: this.ipv4?.value,
          name: this.name?.value,
          usn: this.usn?.value
        }

        const data = {
          query: {
            _id: this.gateway?._id
          },
          set: gateway
        }

        this.gatewayService.editGateway({ data }).then((result) => {
          console.log(result);
        })

      } catch (error) {
        console.log(error);
      }
    }
    console.log("onSubmit()");
  }

}