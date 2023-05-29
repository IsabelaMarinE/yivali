export interface ISourceModel {
  name: string;
  quantity: number;
}

export class SourceModel implements ISourceModel {
  id!: number;
  name!: string;
  quantity!: number;
}
