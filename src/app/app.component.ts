import { Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data_1: any;
  data_2: any;
  data_3: any;
  HI: any="HIII";
  HEY: any="HEEYY";
  HELLO: any="HEELLLOO";
  BON: any="BONJOUR";
  colors: any=[ "#FF6371","#36A2EB","#FFCE45","#800000","#94321D","#80AB34","#894612"];


    constructor() {
      this.data();
    }
      

    data() {

    this.data_2 = {
      labels: [this.HI, this.HEY, this.HELLO, this.BON],
      datasets: [
          {
              data: [42, 5, 3,12,36,49],                    
              hoverBackgroundColor: this.colors.slice(0,6),
              backgroundColor: this.colors.slice(0,6)
          }]    
      };

      this.data_3 = {
        labels: [this.HI, this.HEY, this.HELLO, this.BON],
        datasets: [
            {
                data: [5, 5, 3,14],                    
                hoverBackgroundColor: [
                    "#FF6371",
                    "#36A2EB",
                    "#FFCE45",
                    "#800000",
                ],
                backgroundColor: [
                    "#FF6371",
                    "#36A2EB",
                    "#FFCE45",
                    "#800000",
                ]
            }]    
        };
      }
    }