import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestedcomponentpractice',
  templateUrl: './nestedcomponentpractice.component.html',
  styleUrls: ['./nestedcomponentpractice.component.css']
})
export class NestedcomponentpracticeComponent implements OnInit {

  parent2childvalue?:number;

  constructor() { }

  ngOnInit(): void {
  }

}
