export interface IUpdateSourceRequest {
  id: number;
  name: string;
  quantity: number;
}

export class UpdateSourceRequest implements IUpdateSourceRequest {
  id!: number;
  name!: string;
  quantity!: number;
}
