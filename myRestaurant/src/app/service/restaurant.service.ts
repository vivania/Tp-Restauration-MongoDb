import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../model/restaurants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  public baseUrl = 'http://localhost:8090/api';

  getRestau() {
    return this.http.get<Restaurant[]>(this.baseUrl + '/food');
  }
  getSpeciality() {
    return this.http.get<Restaurant[]>(this.baseUrl + '/allSpecialite');
  }

  getRestauByid(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/restaurantId/${id}`);
  }

  getRestauSpecialuty(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/food`);
  }
}
