import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  orders:any;
  customerId!:number;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerID']
   }

  ngOnInit(): void {
    console.log(this.customerId)
    this.http.get("http://localhost:8888/BILLING-SERVICE/bills/search/byCustomerId?projection=fullBill&customerID="+this.customerId).
    subscribe(data=>{
     this.orders=data
     console.log(data)
    })
  }
  getOrdersDetails(order:any){
    this.router.navigateByUrl("/orderdetail/"+order)
  }
}
