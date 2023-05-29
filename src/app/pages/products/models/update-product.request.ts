export interface IUpdateProductRequest {
  id: number;
  name: string;
  salesValue: number;
  img: any;
  typeImg: string;
}

export class UpdateProductRequest implements IUpdateProductRequest {
  id!: number;
  name!: string;
  salesValue!: number;
  img!: any;
  typeImg!: string;
}
