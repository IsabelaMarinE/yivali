import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients.component';
import { ListClientComponent } from './components/list/list.component';
import { CreateClientComponent } from './components/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            {
                path: 'listClient',
                component: ListClientComponent,
            },
            {
                path: 'createClient',
                component: CreateClientComponent
            },
            {
              path: 'updateClient/:id',
              component: CreateClientComponent
          },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientsRoutingModule {}
