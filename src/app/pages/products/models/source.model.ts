export interface ISourceModel {
  productId: number;
  stockId: number;
  name: string;
  quantity: number;
}

export class SourceModel implements ISourceModel {
  id!: number;
  productId!: number;
  stockId!: number;
  name!: string;
  quantity!: number;
}
