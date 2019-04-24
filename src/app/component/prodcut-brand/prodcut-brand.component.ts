import { Component, OnInit } from '@angular/core';
import { ProductBrandService } from '../../service/product-brand.service';

@Component({
  selector: 'app-prodcut-brand',
  templateUrl: './prodcut-brand.component.html',
  styleUrls: ['./prodcut-brand.component.css']
})
export class ProdcutBrandComponent implements OnInit {

  constructor(private productService:ProductBrandService) { }

  productData;

  ngOnInit() {
    // fetching the product details from json file by using the object of ProductBrand Service
    this.productService.getProductBrand()
    .subscribe(res=>
      {
        this.productData=res;
        console.log(this.productData);
      })
}

}
