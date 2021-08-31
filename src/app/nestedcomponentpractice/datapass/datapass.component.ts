import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datapass',
  templateUrl: './datapass.component.html',
  styleUrls: ['./datapass.component.css']
})
export class DatapassComponent implements OnInit {

  @Input() parent2child?:number;

  child2parentval:number = 0;
  @Output() dataSent: EventEmitter<number>=new EventEmitter<number>();

  child2parent() : void
  {
    this.dataSent.emit(this.child2parentval);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
