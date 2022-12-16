import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  orderdetails:any
  orderID!:number
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.orderID=route.snapshot.params['orderID']
   }

  ngOnInit(): void {
    this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+this.orderID).
    subscribe(data=>{
     this.orderdetails=data
     console.log(data)
    })
  }

}
