import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../model/restaurants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restau-detail',
  templateUrl: './restau-detail.component.html',
  styleUrls: ['./restau-detail.component.css']
})
export class RestauDetailComponent implements OnInit {

  public id: string;

  constructor(public restauService: RestaurantService, private router: Router, private route: ActivatedRoute) { }

  public currentRestau: any;
  mode: number = 0;

   public listRestau: Restaurant;

  ngOnInit() {
 this.id =   this.route.snapshot.params.id;
 console.log(this.id);
 this.restauService.getRestauByid(this.id).subscribe(res => {
      this.listRestau = res;
      console.log(this.listRestau + ' ' + "Id not found ");
    });

  /*   const url = atob(this.route.snapshot.params.url);
    this.restauService.getRestauSpecialuty(url).subscribe( data => {
      this.currentRestau = data;
      console.log(this.currentRestau);

    }, err => console.log(err));
    console.log(url); */
  }
}
