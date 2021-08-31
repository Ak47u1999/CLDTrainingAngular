import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-servicesand-di',
  templateUrl: './servicesand-di.component.html',
  styleUrls: ['./servicesand-di.component.css']
})
export class ServicesandDIComponent implements OnInit {

  constructor(public service : TestserviceService) { }

  ngOnInit(): void {
  }

  val:number=this.service.samplefunc();
}
