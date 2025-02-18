import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsteroidesService {

  constructor(private http:HttpClient) { }

  getApi(){
    return this.http.get('https://www.neowsapp.com/rest/v1/feed/today');
  }
}
