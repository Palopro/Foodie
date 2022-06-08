export class User {
  public id: number;
  public username: string;
  public email: string;

  public constructor(
    id: number,
    username: string,
    email: string,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
}
