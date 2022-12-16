import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any
  host:string="http://localhost:8888/PRODUCT-SERVICE/products"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.host).subscribe(
      data=>{console.log(data,5)
      this.products=data
      }
      ,err=>{}
      
      )
  }

}
