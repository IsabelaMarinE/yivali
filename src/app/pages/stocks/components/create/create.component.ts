import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateStockRequest } from '../../models/create-stock.request';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { StockStoreState } from '../../store/reducers/stock-store.reducer';
import * as StockActions from '../../store/actions/stock.action'
import * as StocksSelector from '../../store/selectors/stock.selectors';
import { Observable, ReplaySubject, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { StockModel } from '../../models/stock.model';
import { UpdateStockRequest } from '../../models/update-stock.request';

@Component({
  selector: 'create-stock',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateStockComponent implements OnInit {

  public ngDestroyed$ = new Subject();
  public stock = new StockModel();
  public itemRequest = new GetItemRequest();

  constructor(
    private stockStore: Store<StockStoreState>,
    private route: ActivatedRoute,
  ) {}

  public ngOnDestroy() {
    this.stockStore.dispatch(StockActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      if(params.get('id') !== null){
        this.itemRequest.id = params.get('id')!;
        this.stockStore.dispatch(StockActions.loadStock({request: this.itemRequest}))
      }
    });
    this.storeSubscription();
  }

  private storeSubscription(){
    this.stockStore
      .select(StocksSelector.createStockResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Producto en Inventario',
            text: 'Agregado Exitosamente'
          });
        }
      })

    this.stockStore
      .select(StocksSelector.selectStock)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.stock = _.cloneDeep(response.items[0]);
        }
      })

    this.stockStore
      .select(StocksSelector.selectUpdateStockResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Producto Actualizado',
            text: 'Exitosamente'
          });
        }
      })
  }

  onSubmite(form:NgForm){
    if(form.valid){
      let request;
      if(this.itemRequest.id === undefined){
        request = new CreateStockRequest();
        request = _.merge(request, this.stock);
        this.stockStore.dispatch(StockActions.createStock({request}));
      }else {
        request = new UpdateStockRequest();
        request = _.merge(request, this.stock);
        this.stockStore.dispatch(StockActions.updateStock({request}));
      }
    }else{
      Swal.fire({
        icon: 'info',
        title: 'Fromulario Incompleto',
        text: 'Llenar todos los campos'
      });
    }
  }

  LoadImgPerfil(file:any){
    var imgFile = file.target.files.item(0);
    //Preview Imagen
    var reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = (event:any)=>{
      var imgLoad = event.target.result;
      this.stock.invoiceImg = imgLoad.split(',')[0];
    }
    this.convertFile(file.target.files[0]).subscribe(base64 => {
      this.stock.typeImg = base64;
    })
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event:any) => result.next(btoa(event.target.result.toString()));
    return result;
  }
}
