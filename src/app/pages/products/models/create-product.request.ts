export interface ICreateProductRequest {
  name: string;
  img: any;
  typeImg: string;
}

export class CreateProductRequest implements ICreateProductRequest {
  name!: string;
  img!: any;
  typeImg!: string;
}
