export interface IGetItemRequest {
  id: string;
}

export class GetItemRequest implements IGetItemRequest {
  id!: string;
}
