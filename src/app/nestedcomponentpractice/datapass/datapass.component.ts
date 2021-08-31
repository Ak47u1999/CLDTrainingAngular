import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapass',
  templateUrl: './datapass.component.html',
  styleUrls: ['./datapass.component.css']
})
export class DatapassComponent implements OnInit {

  @Input() parent2child?:number;

  constructor() { }

  ngOnInit(): void {
  }

}
