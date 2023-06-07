import { TemplateRef } from "@angular/core";

export interface IModalModel {
  title: string;
  description: string;
  mainContent: TemplateRef<any>;
}

export class ModalModel implements IModalModel {
  title!: string;
  description!: string;
  mainContent!: TemplateRef<any>;
}
