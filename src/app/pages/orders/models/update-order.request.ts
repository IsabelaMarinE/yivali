export interface IUpdateOrderRequest {
  id: number;
  clientId: number;
  orderDescription: string;
  transporter: string;
  shippingCode: string;
  delivered: boolean;
  dateOfShipment: string;
}

export class UpdateOrderRequest implements IUpdateOrderRequest {
  id!: number;
  clientId!: number;
  orderDescription!: string;
  transporter!: string;
  shippingCode!: string;
  delivered!: boolean;
  dateOfShipment!: string;
}
