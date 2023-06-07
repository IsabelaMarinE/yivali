import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './components/stocks.component';
import { ListStockComponent } from './components/list/list.component';
import { CreateStockComponent } from './components/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: StocksComponent,
        children: [
          {
              path: 'listStock',
              component: ListStockComponent,
          },
          {
              path: 'updateStock/:id',
              component: CreateStockComponent
          },
          {
            path: 'createStock',
            component: CreateStockComponent
          },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StocksRoutingModule {}
