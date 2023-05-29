export interface IUpdateClientRequest {
  id: number;
  name: string;
  lastName: string;
  telephone: string;
  gender: string;
  adress: string;
  email: string;
  city: string;
  updatedDate: string;
  isActive: boolean;
}

export class UpdateClientRequest implements IUpdateClientRequest {
  id!: number;
  name!: string;
  lastName!: string;
  telephone!: string;
  gender!: string;
  adress!: string;
  email!: string;
  city!: string;
  updatedDate!: string;
  isActive!: boolean;
}
