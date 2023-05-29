export interface ISourceModel {
  name: string;
  productId: number;
  quantity: number;
}

export class SourceModel implements ISourceModel {
  id!: number;
  name!: string;
  productId!: number;
  quantity!: number;
}
