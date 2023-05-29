export interface ICreateOrderRequest {
  clientId: number;
  orderDescription: string;
}

export class CreateOrderRequest implements ICreateOrderRequest {
  clientId!: number;
  orderDescription!: string;
}
