import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurants';
import { RestaurantService } from '../service/restaurant.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private restauService: RestaurantService, private route: Router) { }

  lisRestaurant$: Observable<Restaurant[]>;
  value: any;

  ngOnInit() {
  }
/*
  getAllRestaurant() {
    this.lisRestaurant$ = this.restauService.getRestau();

  } */
/*   getAllPizzaSpeciality() {
    this.route.navigate(['/speciality']);
  } */
}
