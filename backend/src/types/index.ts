export interface IClient {
  name: string;
  email: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
