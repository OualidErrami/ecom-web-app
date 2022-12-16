import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url:"http://localhost:8080",
        realm:"wallet-realm",
        clientId:"wallet-client",
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    OrderComponent,
    OrderdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {provide:APP_INITIALIZER,useFactory:initializeKeycloak,multi:true,deps:[KeycloakService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
