export interface ICreateSourceRequest {
  name: string;
  quantity: number;
}

export class CreateSourceRequest implements ICreateSourceRequest {
  name!: string;
  quantity!: number;
}
