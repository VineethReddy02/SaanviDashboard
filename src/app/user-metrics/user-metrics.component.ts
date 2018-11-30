import { Component, OnInit } from '@angular/core';
import { User } from '../entity/User.entity';
import { GetdataService} from '../services/getdata.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-metrics',
  templateUrl: './user-metrics.component.html',
  styleUrls: ['./user-metrics.component.css']
})
export class UserMetricsComponent implements OnInit {
  [x: string]: any;
  userdata: User[];
  
  constructor(private dataservice: GetdataService, private route: ActivatedRoute, private location: Location) { }

 
 c : number=0;

productive : number=0;
unproductive : number=0;

Prod_Unprod_labels: string[]=[];
Prod_Unprod_values: number[]=[];

Prod_values: number[]=[];
Prod_labels: string[]=[];

Unprod_values: number[]=[];
Unprod_labels: string[]=[];

data_1: any;
data_2: any;
data_3: any;

 colors: any=[ "#FF6371","#36A2EB","#FFCE45","#800000","#80AB34","#894612","#94321D"];


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.dataservice.getPosts(id).subscribe(userdata => {
       
        this.Prod_Metrics(userdata);
        this.Unprod_Metrics(userdata);
        this.Prod_Unprod(userdata);
        
    })
  };

 Prod_Unprod(userdata) {

   for ( var i in userdata) {
      if(userdata[i].is_productive) {
        this.productive=this.productive+1;
      } else {
        this.unproductive=this.unproductive+1;
      }
   }

   this.Prod_Unprod_labels.push("Productive");
   this.Prod_Unprod_labels.push("Un-Productive");

   this.Prod_Unprod_values.push(this.productive);

   this.Prod_Unprod_values.push(this.unproductive);

  
   this.data_1 = {
    labels: this.Prod_Unprod_labels,
    datasets: [
        {
            data: this.Prod_Unprod_values,                    
            hoverBackgroundColor: this.colors.slice(0,this.Prod_Unprod_labels.length),
            backgroundColor: this.colors.slice(0,this.Prod_Unprod_labels.length),
        }]    
    };

 }

Prod_Metrics(userdata) {
  
  for ( var i in userdata) {
    this.c=0;
    if(userdata[i].is_productive) {
     for ( var j in userdata[i].list) {
         this.c = this.c+ userdata[i].list[j].total_time;
     }
     this.Prod_labels.push(userdata[i].activity_name);
     this.Prod_values.push(this.c);
    }
    
    
  }
  
  this.data_2 = {
    labels: this.Prod_labels,
    datasets: [
        {
            data: this.Prod_values,                    
            hoverBackgroundColor: this.colors.slice(0,this.Prod_labels.length),
            backgroundColor: this.colors.slice(0,this.Prod_labels.length),
        }]    
    };
  }

  Unprod_Metrics(userdata) {
  
    for ( var i in userdata) {
      this.c=0;
      if(!userdata[i].is_productive) {
       for ( var j in userdata[i].list) {
           this.c = this.c+ userdata[i].list[j].total_time;
       }
        this.Unprod_labels.push(userdata[i].activity_name);
       this.Unprod_values.push(this.c);
       console.log(this.c);
      }
      
      
    }
    this.data_3 = {
      labels: this.Unprod_labels,
      datasets: [
          {
              data: this.Unprod_values,                    
              hoverBackgroundColor: this.colors.slice(0,this.Unprod_labels.length),
              backgroundColor: this.colors.slice(0,this.Unprod_labels.length),
          }]    
      };
    }

}
