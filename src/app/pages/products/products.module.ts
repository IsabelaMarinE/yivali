import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './components/products/list/list.component';
import { CreateProductComponent } from './components/products/create/create.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { productStoreReducer, productStoreFeatureKey } from './store/reducers/product-store.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SourceComponent } from './components/sources/source/source.component';
import { ListSourceComponent } from './components/sources/list/list.component';



@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
    ProductsComponent,
    SourceComponent,
    ListSourceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(productStoreFeatureKey, productStoreReducer),
    EffectsModule.forFeature(ProductEffects)
  ]
})
export class ProductsModule { }
