export interface Client {
  _id: string;
  name: string;
  email: string;
  tags: string[];
}

export interface PostClientInput {
  name: string;
  email: string;
}

export interface PostClientOutput {
  name: string;
  email: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface GetClientsOutput {
  name: string;
  email: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  _id: string;
}
