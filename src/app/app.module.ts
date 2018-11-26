import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/primeng';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { UserMetricsComponent } from './user-metrics/user-metrics.component';
import { GetdataService } from './services/getdata.service';
import { routes } from './app.router';



@NgModule({
  declarations: [
    AppComponent,
    UserMetricsComponent
  ],

  
  imports: [
    BrowserModule,
    ChartModule,
    MarkdownModule,
    HttpClientModule,
    routes

  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
