import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { OrdersComponent } from './components/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StockEffects } from '../stocks/store/effects/stock.effects';
import { stockStoreReducer, stockStoreFeatureKey } from '../stocks/store/reducers/stock-store.reducer';



@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(stockStoreFeatureKey, stockStoreReducer),
    EffectsModule.forFeature(StockEffects)
  ]
})
export class OrdersModule { }
