export interface ICreateSourceRequest {
  name: string;
  productId: number;
  quantity: number;
}

export class CreateSourceRequest implements ICreateSourceRequest {
  name!: string;
  productId!: number;
  quantity!: number;
}
