import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.css']
})
export class IndexPage implements OnInit {

  title = 'My Gateways';

  constructor() { }

  ngOnInit(): void {
  }

}
