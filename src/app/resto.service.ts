import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';
  //call for Api
  constructor(private http: HttpClient) {}
  getList() {
    //after adding url you should add this to get data
    return this.http.get(this.url);
  }
}
