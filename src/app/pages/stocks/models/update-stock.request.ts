export interface IUpdateStockRequest {
  id: string;
  name: string;
  quantity: number;
  price: number;
  buyDate: string;
  invoiceImg: any;
  typeImg: string;
}

export class UpdateStockRequest implements IUpdateStockRequest {
  id!: string;
  name!: string;
  quantity!: number;
  price!: number;
  buyDate!: string;
  invoiceImg!: any;
  typeImg!: string;
}
