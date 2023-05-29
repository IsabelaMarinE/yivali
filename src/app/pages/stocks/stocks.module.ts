import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { StocksComponent } from './components/stocks.component';
import { StocksRoutingModule } from './stocks-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { stockStoreReducer, stockStoreFeatureKey } from './store/reducers/stock-store.reducer';
import { StockEffects } from './store/effects/stock.effects';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    StocksComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(stockStoreFeatureKey, stockStoreReducer),
    EffectsModule.forFeature(StockEffects)
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StocksModule { }
