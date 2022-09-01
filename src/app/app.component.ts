import { Component } from '@angular/core';
import { CurrencyApiDataService } from './currency-api-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  currjson : any = [];

  base = 'USD';
  cont2 = 'USD';
  result: string = '1'

  changebase(a: string){
    this.base = a;
  }

  tocountry(b: string){
    this.cont2 = b;
  }

  constructor(private currency: CurrencyApiDataService){}

  convert(){
    /* console.log(this.base)
    console.log(this.cont2) */
    /* we convert the url for the selected currency type */
    this.currency.getcurrencydata(this.base).subscribe(data => {
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson)

      if (this.cont2 == 'USD') {
        this.result = this.currjson.rates.USD
      }

      if (this.cont2 == 'EUR') {
        this.result = this.currjson.rates.EUR
      }

      if (this.cont2 == 'CNY') {
        this.result = this.currjson.rates.CNY
      }

      if (this.cont2 == 'KRW') {
        this.result = this.currjson.rates.KRW
      }

      if (this.cont2 == 'KPW') {
        this.result = this.currjson.rates.KPW
      }

      if (this.cont2 == 'JPY') {
        this.result = this.currjson.rates.JPY
      }

      if (this.cont2 == 'CAD') {
        this.result = this.currjson.rates.CAD
      }

    })
  }
}
