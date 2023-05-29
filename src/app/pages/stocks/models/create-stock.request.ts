export interface ICreateStockRequest {
  name: string;
  quantity: number;
  price: number;
  buyDate: string;
  invoiceImg: any;
  typeImg: string;
}

export class CreateStockRequest implements ICreateStockRequest {
  name!: string;
  quantity!: number;
  price!: number;
  buyDate!: string;
  invoiceImg!: any;
  typeImg!: string;
}
