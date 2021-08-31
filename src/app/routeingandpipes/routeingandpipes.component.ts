import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe,PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-routeingandpipes',
  templateUrl: './routeingandpipes.component.html',
  styleUrls: ['./routeingandpipes.component.css']
})

export class RouteingandpipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  val : number=0;
}
