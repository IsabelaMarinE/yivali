import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./pages/stocks/stocks.module').then(m => m.StocksModule)},
  { path: 'productos', loadChildren: ()=> import('./pages/products/products.module').then(m => m.ProductsModule)},
  { path: 'clientes', loadChildren: ()=> import('./pages/clients/clients.module').then(m => m.ClientsModule)},
  { path: 'pedidos', loadChildren: ()=> import('./pages/orders/orders.module').then(m => m.OrdersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
