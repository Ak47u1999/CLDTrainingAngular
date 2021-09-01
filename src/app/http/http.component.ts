import { Component, OnInit } from '@angular/core';
import { TesthttpService } from '../Services/testhttp.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HTTPComponent implements OnInit {

  constructor(private httpservice : TesthttpService) { }

  ngOnInit(): void {

    this.httpservice.getData().subscribe(data => console.log(data));
  }

}
