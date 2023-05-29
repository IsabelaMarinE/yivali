import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './components/stocks.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: StocksComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
            },
            {
                path: 'create/:id',
                component: CreateComponent
            },
            {
              path: 'create',
              component: CreateComponent
          },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StocksRoutingModule {}
