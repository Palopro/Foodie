import { User } from '../../../../domain/model/user';

export interface UserJSON {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
}

export class UserDTO {
  protected id: number;
  protected username: string;
  protected email: string;
  protected provider: string;
  protected confirmed: boolean;
  protected blocked: boolean;

  public constructor(
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.provider = provider;
    this.confirmed = confirmed;
    this.blocked = blocked;
  }

  public static parseFromJSON = (json: UserJSON) =>
    new User(json.id, json.username, json.email);
}
