import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurants';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css']
})
export class SpecialityComponent implements OnInit {
  timeStamp: any;

  constructor(private restauService: RestaurantService, private router: Router) { }

  public ListOfPizzaRestau: Restaurant[];
  public mode: number = 0;
  public restaurant: Restaurant;

  ngOnInit() {
    this.getPizzaSpeciality();
  }

  getPizzaSpeciality() {
    this.restauService.getSpeciality().subscribe(data => {
      this.ListOfPizzaRestau = data;
    });
    this.mode = 1;
  }

  productDetails(id: string) {
    //const url = btoa(restaurant.id);
    this.router.navigate(['restau-detail/' + id]);
  }
  getTS() {
    return this.timeStamp;
  }
}
