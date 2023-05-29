export interface IUpdateProductRequest {
  id: string;
  name: string;
  salesValue: number;
  img: any;
  typeImg: string;
}

export class UpdateProductRequest implements IUpdateProductRequest {
  id!: string;
  name!: string;
  salesValue!: number;
  img!: any;
  typeImg!: string;
}
