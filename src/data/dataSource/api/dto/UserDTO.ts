import { User } from '../../../../domain/model/user';

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

  public static toUser = () =>
    new User(
      this.id,
      this.username,
      this.email,
      this.provider,
      this.confirmed,
      this.blocked,
    );

  public static parseFromSJON = (json: UserDTO) =>
    new User(
      json.id,
      json.username,
      json.email,
      json.provider,
      json.confirmed,
      json.blocked,
    );
}
