export interface ICreateClientRequest {
  name: string;
  lastName: string;
  telephone: string;
  gender: string;
  email: string;
  adress: string;
  city: string;
}

export class CreateClientRequest implements ICreateClientRequest {
  name!: string;
  lastName!: string;
  telephone!: string;
  gender!: string;
  email!: string;
  adress!: string;
  city!: string;
}
