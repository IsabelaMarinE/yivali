import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { ClientsComponent } from './components/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientEffects } from './store/effects/clients.effects';
import { clientFetureKey } from './store/reducers/clients.reducer';
import { clientStoreReducer } from './store/reducers/clients-store.reducer';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    StoreModule.forFeature(clientFetureKey, clientStoreReducer),
    EffectsModule.forRoot([ClientEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientsModule { }
