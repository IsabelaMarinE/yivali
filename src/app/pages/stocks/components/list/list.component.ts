import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as _ from 'lodash';
import { StockStoreState } from '../../store/reducers/stock-store.reducer';
import * as StockActions from '../../store/actions/stock.action'
import * as StocksSelector from '../../store/selectors/stock.selectors';
import { StockModel } from '../../models/stock.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalService } from 'src/app/components/modal/modal.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'list-stock',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListStockComponent implements OnInit {

  @ViewChild('ViewStockTemplate')
  ViewStockTemplate!: TemplateRef<any>;

  public ngDestroyed$ = new Subject();
  public stocks!: Array<StockModel>;
  public stock!: StockModel;
  public modalTemplate!: ViewContainerRef;

  constructor(
    private stockStore: Store<StockStoreState>,
    private router: Router,
    private modalService: ModalService,
    private sanitizer: DomSanitizer,
  ) {}

  public ngOnDestroy() {
    this.stockStore.dispatch(StockActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.stockStore.dispatch(StockActions.loadStocks());
    this.storeSubscription();
  }

  private storeSubscription(){
    this.stockStore
      .select(StocksSelector.selectStocks)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
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

  public editStock(id:number){
    this.router.navigate([`/updateStock/${id}`]);
  }

  public deleteStock(id:number){
    if(id){
      Swal.fire({
        title: 'Estas seguro que quieres eliminar este producto del Stock?',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.stockStore.dispatch(StockActions.deleteStock({request: id}));
        } else if (result.isDenied) {
          Swal.fire('Producto no eliminado', '', 'info')
        }
      })
    }
  }

  public viewStock(data:StockModel){
    this.stock = data;
    var img = data.typeImg +','+(this.sanitizer.bypassSecurityTrustResourceUrl(data.invoiceImg) as any).changingThisBreaksApplicationSecurity;
    this.stock.invoiceImg = img;
    this.modalService.openModal({
      title: 'Datos del Materia Inventario',
      mainContent: this.ViewStockTemplate
    });
  }

}
