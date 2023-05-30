import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';
import * as ClientActions from '../../store/actions/clients.action';
import * as ClientsSelector from '../../store/selectors/client.selectors';
import { ClientModel } from '../../models/client.model';
import { ClientsStoreState } from '../../store/reducers/clients-store.reducer';

@Component({
  selector: 'list-clients',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListClientComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  public clients!: Array<ClientModel>;

  constructor(
    private clientStore: Store<ClientsStoreState>,
    private router: Router
  ) {}

  public ngOnDestroy() {
    this.clientStore.dispatch(ClientActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.clientStore.dispatch(ClientActions.loadClients());
    this.storeSubscription();
  }

  private storeSubscription(){
    this.clientStore
      .select(ClientsSelector.selectClients)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.clients = _.cloneDeep(response.items)
        }
      })

    this.clientStore
      .select(ClientsSelector.selectDeleteClientResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          Swal.fire({
            icon: 'success',
            title: 'Cliente Eliminado',
            text: 'Exitosamente'
          });
        }
      })
  }

  public editClient(id:number){
    this.router.navigate([`/updateClient/${id}`]);
  }

  public deleteClient(id:number){
    if(id){
      Swal.fire({
        title: 'Estas seguro que quieres eliminar el Cliente?',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.clientStore.dispatch(ClientActions.deleteClient({request: id}));
        } else if (result.isDenied) {
          Swal.fire('Cliente no eliminado', '', 'info')
        }
      })
    }
  }
}
