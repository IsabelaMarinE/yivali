import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './components/create/create.component';
import { ListClientComponent } from './components/list/list.component';
import { ClientsComponent } from './components/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientEffects } from './store/effects/clients.effects';
import { clientStoreReducer, clientStoreFeatureKey } from './store/reducers/clients-store.reducer';

@NgModule({
  declarations: [
    CreateClientComponent,
    ListClientComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    StoreModule.forFeature(clientStoreFeatureKey, clientStoreReducer),
    EffectsModule.forFeature(ClientEffects)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientsModule { }
