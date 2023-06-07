import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject, takeUntil } from 'rxjs';
import * as _ from 'lodash';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { ProductModel } from '../../../models/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductStoreState } from '../../../store/reducers/product-store.reducer';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../../store/actions/product.action';
import * as ProductSelector from '../../../store/selectors/product.selectors';
import * as SourceSelector from '../../../store/selectors/source.selectors';
import Swal from 'sweetalert2';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CreateProductRequest } from '../../../models/create-product.request';
import { UpdateProductRequest } from '../../../models/update-product.request';


@Component({
  selector: 'create-product',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProductComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  public product = new ProductModel();
  public listStocks: any;
  public itemRequest = new GetItemRequest();
  public form!: FormGroup;

  constructor(
    private productStore: Store<ProductStoreState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  public formProduct = this.fb.group({
    name: ['', [Validators.required]],
    img: [''],
    typeImg: [''],
    sourceList: this.fb.array([])
  })

  get sourceList() {
    return this.formProduct.controls["sourceList"] as FormArray;
  }

  public ngOnDestroy() {
    this.productStore.dispatch(ProductActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      if(params.get('id') !== null){
        this.itemRequest.id = params.get('id')!;
        this.productStore.dispatch(ProductActions.loadProduct({request: this.itemRequest}))
      }
    });
    this.storeSubscription();
  }

  private storeSubscription(){
    this.productStore
      .select(ProductSelector.createProductResponse)
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

    this.productStore
      .select(ProductSelector.selectProduct)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.product = _.cloneDeep(response.items[0]);
        }
      })

    this.productStore
      .select(ProductSelector.selectUpdateProductResponse)
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

  addSource() {
    const SourceForm = this.fb.group({
      productId: [0, Validators.required],
      stockId: [0, Validators.required],
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.pattern(/^[1-9]+[1-9]*$/)]]
    });
    this.sourceList.push(SourceForm);
  }

  deleteSource(sourceIndex: number) {
    this.sourceList.removeAt(sourceIndex);
  }

  onSubmite(){
    if(this.formProduct.valid){
      let request;
      if(this.itemRequest.id === undefined){
        request = new CreateProductRequest();
        request = _.merge(request, this.product);
        this.productStore.dispatch(ProductActions.createProduct({request}));
      }else {
        request = new UpdateProductRequest();
        request = _.merge(request, this.product);
        this.productStore.dispatch(ProductActions.updateProduct({request}));
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
      this.product.img = imgLoad.split(',')[0];
    }
    this.convertFile(file.target.files[0]).subscribe(base64 => {
      this.product.typeImg = base64;
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
