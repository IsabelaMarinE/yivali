import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: OrdersComponent,
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
export class OrdersRoutingModule {}
