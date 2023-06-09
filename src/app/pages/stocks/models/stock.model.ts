export interface IStockModel {
  name: string;
  quantity: number;
  price: number;
  buyDate: string;
  invoiceImg: any;
  typeImg: string;
}

export class StockModel implements IStockModel {
  id!: number;
  name!: string;
  quantity!: number;
  price!: number;
  buyDate!: string;
  invoiceImg!: any;
  typeImg!: string;
}
