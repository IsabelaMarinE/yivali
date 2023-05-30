import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
import { CreateClientRequest } from '../../models/create-client.request';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { ClientsStoreState } from '../../store/reducers/clients-store.reducer';
import * as ClientActions from '../../store/actions/clients.action';
import * as ClientSelector from '../../store/selectors/client.selectors';

@Component({
  selector: 'create-clients',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateClientComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  public client = new CreateClientRequest();
  public itemRequest = new GetItemRequest();

  constructor(
    private stockStore: Store<ClientsStoreState>,
    private route: ActivatedRoute,
  ) {}

  public ngOnDestroy() {
    this.stockStore.dispatch(ClientActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      if(params.get('id') !== null){
        this.itemRequest.id = params.get('id')!;
        this.stockStore.dispatch(ClientActions.loadClient({request: this.itemRequest}))
      }
    });
    this.storeSubscription();
  }

  private storeSubscription(){
    this.stockStore
      .select(ClientSelector.createClientResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Cliente',
            text: 'Agregado Exitosamente'
          });
        }
      })

    this.stockStore
      .select(ClientSelector.selectClient)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          this.client = response;
        }
      })

    this.stockStore
      .select(ClientSelector.selectUpdateClientResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Cliente Actualizado',
            text: 'Exitosamente'
          });
        }
      })
  }

  createNewClient(form:NgForm){
    if(form.valid){
      this.client.gender = form.value.gender;
      var request = new CreateClientRequest();
      request = _.merge(request, this.client);
      this.stockStore.dispatch(ClientActions.createClient({request}));
    }else{
      Swal.fire({
        icon: 'info',
        title: 'Fromulario Incompleto',
        text: 'Llenar todos los campos'
      });
    }
  }

}
