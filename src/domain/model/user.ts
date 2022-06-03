export class User {
  public id: number;
  public username: string;
  public email: string;
  public provider: string;
  public confirmed: boolean;
  public blocked: boolean;

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
}
