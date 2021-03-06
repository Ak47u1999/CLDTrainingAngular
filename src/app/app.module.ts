import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteingandpipesComponent } from './routeingandpipes/routeingandpipes.component';
import { ServicesandDIComponent } from './servicesand-di/servicesand-di.component';
import { NestedcomponentpracticeComponent } from './nestedcomponentpractice/nestedcomponentpractice.component';
import { DatapassComponent } from './nestedcomponentpractice/datapass/datapass.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTPComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteingandpipesComponent,
    ServicesandDIComponent,
    NestedcomponentpracticeComponent,
    DatapassComponent,
    HTTPComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
