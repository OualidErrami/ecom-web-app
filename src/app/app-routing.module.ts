import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './shared/authguard.guard';

const routes: Routes = [
  {
    path:'products',
    component:ProductsComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'customers',
    component:CustomersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"orders/:customerID",
    component:OrderComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"orderdetail/:orderID",
    component:OrderdetailComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
