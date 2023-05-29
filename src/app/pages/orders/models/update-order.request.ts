export interface IUpdateOrderRequest {
  id: string;
  clientId: number;
  orderDescription: string;
  transporter: string;
  shippingCode: string;
  delivered: boolean;
  dateOfShipment: string;
}

export class UpdateOrderRequest implements IUpdateOrderRequest {
  id!: string;
  clientId!: number;
  orderDescription!: string;
  transporter!: string;
  shippingCode!: string;
  delivered!: boolean;
  dateOfShipment!: string;
}
