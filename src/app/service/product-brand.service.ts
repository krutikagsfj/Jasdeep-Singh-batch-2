import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductBrandService {

  constructor(private http:HttpClient) { }
  //creating a method to read from json file using http client and get method;
  getProductBrand()
  {
    return this.http.get('assets/productBrands.json')
  }
}
