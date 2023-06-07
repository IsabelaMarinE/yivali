import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as _ from 'lodash';
import { ProductModel } from '../../../models/product.model';
import { ProductStoreState } from '../../../store/reducers/product-store.reducer';
import { Router } from '@angular/router';
import * as ProductActions from '../../../store/actions/product.action';
import * as ProductSelector from '../../../store/selectors/product.selectors';
import * as SourceSelector from '../../../store/selectors/source.selectors';
import Swal from 'sweetalert2';
import { ModalService } from 'src/app/components/modal/modal.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListProductComponent implements OnInit {

  @ViewChild('ViewClientTemplate')
  ViewClientTemplate!: TemplateRef<any>;

  public ngDestroyed$ = new Subject();
  public products!: Array<ProductModel>;
  public product!: ProductModel;
  public modalTemplate!: ViewContainerRef;

  constructor(
    private productStore: Store<ProductStoreState>,
    private router: Router,
    private modalService: ModalService,
    private sanitizer: DomSanitizer,
  ) {}

  public ngOnDestroy() {
    this.productStore.dispatch(ProductActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.productStore.dispatch(ProductActions.loadProducts());
    this.storeSubscription();
  }

  private storeSubscription(){
    this.productStore
      .select(ProductSelector.selectProducts)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.products = _.cloneDeep(response.items)
        }
      })

    this.productStore
      .select(ProductSelector.selectDeleteProductResponse)
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

  public editProduct(id:number){
    this.router.navigate([`/updateProduct/${id}`]);
  }

  public deleteProduct(id:number){
    if(id){
      Swal.fire({
        title: 'Estas seguro que quieres eliminar este producto del Stock?',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.productStore.dispatch(ProductActions.deleteProduct({request: id}));
        } else if (result.isDenied) {
          Swal.fire('Producto no eliminado', '', 'info')
        }
      })
    }
  }

  public viewProduct(data:ProductModel){
    this.product = data;
    var img = data.typeImg +','+(this.sanitizer.bypassSecurityTrustResourceUrl(data.img) as any).changingThisBreaksApplicationSecurity;
    this.product.img = img;
    this.modalService.openModal({
      title: 'Datos del Producto',
      mainContent: this.ViewClientTemplate
    });
  }

}
