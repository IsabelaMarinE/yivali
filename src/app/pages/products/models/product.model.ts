export interface IProductModel {
  name: string;
  price: number;
  commercialValue: number;
  salesValue: number;
  img: any;
  typeImg: string;
}

export class ProductModel implements IProductModel {
  id!: number;
  name!: string;
  price!: number;
  commercialValue!: number;
  salesValue!: number;
  img!: any;
  typeImg!: string;
}
