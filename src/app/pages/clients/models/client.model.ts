export interface IClientModel {
  name: string;
  lastName: string;
  telephone: string;
  gender: string;
  adress: string;
  email: string;
  city: string;
  isActive: boolean;
}

export class ClientModel implements IClientModel {
  id!: string;
  name!: string;
  lastName!: string;
  telephone!: string;
  gender!: string;
  adress!: string;
  email!: string;
  city!: string;
  isActive!: boolean;
}
