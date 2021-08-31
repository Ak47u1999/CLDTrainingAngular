import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestedcomponentpractice',
  templateUrl: './nestedcomponentpractice.component.html',
  styleUrls: ['./nestedcomponentpractice.component.css']
})
export class NestedcomponentpracticeComponent implements OnInit {

  parent2childvalue?:number;
  child2parentvalue?:number;

  constructor() { }

  ngOnInit(): void {
  }

  dataSent(val:number)
  {
    this.child2parentvalue=val;
  }
}
