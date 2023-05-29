import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as _ from 'lodash';
import { StockStoreState } from '../../store/reducers/stock-store.reducer';
import * as StockActions from '../../store/actions/stock.action'
import * as StocksSelector from '../../store/selectors/stock.selectors';
import { StockModel } from '../../models/stock.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'list-stock',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public ngDestroyed$ = new Subject();
  public stocks!: Array<StockModel>;

  constructor(
    private stockStore: Store<StockStoreState>,
    private router: Router
  ) {}

  public ngOnDestroy() {
    this.stockStore.dispatch(StockActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.storeSubscription();
  }

  private storeSubscription(){
    this.stockStore
      .select(StocksSelector.selectStocks)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          this.stocks = _.cloneDeep(response.items)
        }
      })

    this.stockStore
      .select(StocksSelector.selectDeleteStockResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Producto Eliminado',
            text: 'Exitosamente'
          });
        }
      })
  }

  public editStock(id:string){
    this.router.navigate(['/update', { id: id }]);
  }

  public deleteStock(id:string){
    if(id){
      Swal.fire({
        title: 'Estas seguro que quieres eliminar este producto del Stock?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.stockStore.dispatch(StockActions.deleteStock({request: id}));
        } else if (result.isDenied) {
          Swal.fire('Producto no eliminado', '', 'info')
        }
      })
    }
  }

}
