import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ListProductComponent } from './components/products/list/list.component';
import { CreateProductComponent } from './components/products/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            {
                path: 'listProduct',
                component: ListProductComponent,
            },
            {
              path: 'createProduct',
              component: CreateProductComponent
            },
            {
              path: 'updateProduct/:id',
              component: CreateProductComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
