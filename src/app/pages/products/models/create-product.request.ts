import { SourceModel } from "./source.model";

export interface ICreateProductRequest {
  name: string;
  img: any;
  typeImg: string;
  sourceList: Array<SourceModel>
}

export class CreateProductRequest implements ICreateProductRequest {
  name!: string;
  img!: any;
  typeImg!: string;
  sourceList!: Array<SourceModel>
}
