export interface IUpdateStockRequest {
  id: number;
  name: string;
  quantity: number;
  price: number;
  buyDate: string;
  invoiceImg: any;
  typeImg: string;
}

export class UpdateStockRequest implements IUpdateStockRequest {
  id!: number;
  name!: string;
  quantity!: number;
  price!: number;
  buyDate!: string;
  invoiceImg!: any;
  typeImg!: string;
}
