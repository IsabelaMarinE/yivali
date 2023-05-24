import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
            },
            {
                path: 'create/:id',
                component: CreateComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientsRoutingModule {}
