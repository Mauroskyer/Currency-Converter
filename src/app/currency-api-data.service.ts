import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiDataService {
  /* we make use of an API to view the exchange rate of currencies */
  constructor(private http:HttpClient) { }

  getcurrencydata(country1: string){
    let url= 'https://api.exchangerate.host/latest?base='+ country1
    return this.http.get(url);
  }
}
