export interface IOrderModel {
  clientId: number;
  orderDescription: string;
  transporter: string;
  shippingCode: string;
  delivered: boolean;
  dateOfShipment: string;
}

export class OrderModel implements IOrderModel {
  id!: number;
  clientId!: number;
  orderDescription!: string;
  transporter!: string;
  shippingCode!: string;
  delivered!: boolean;
  dateOfShipment!: string;
}
