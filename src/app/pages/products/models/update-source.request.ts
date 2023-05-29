export interface IUpdateSourceRequest {
  id: string;
  name: string;
  quantity: number;
}

export class UpdateSourceRequest implements IUpdateSourceRequest {
  id!: string;
  name!: string;
  quantity!: number;
}
