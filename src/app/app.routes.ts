import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { CartComponent } from './Pages/cart/cart.component';
import { OrderComponent } from './Pages/order/order.component';

import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { RoutesComponent } from './routes/routes.component';
import { ProductsComponent } from './Pages/products/products.component';

export const routes: Routes = [
    { path: '', component: RoutesComponent,children:[
        { path: 'login', title: 'Login', component: LoginComponent },
        {path:'register', title:'register',component:RegisterComponent},
      
        { path: 'home', title: 'Home', component: HomeComponent },
        { path: 'products', title: 'Products', component: ProductsComponent },
        { path: 'productsdetails/:id', title: 'Product Details', component: ProductDetailsComponent },
        {path:'cart', title:'cart',component:CartComponent},
        {path:'order', title:'order',component:OrderComponent},
        { path: '**', component: NotfoundComponent } 
    ] }, 
];
