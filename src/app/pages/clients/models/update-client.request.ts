export interface IUpdateClientRequest {
  userId: string;
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
  id!: string;
  userId!: string;
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
