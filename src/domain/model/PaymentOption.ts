export class PaymentOption {
  public id: number;
  public name: string;
  public value: string;

  public constructor(id: number, name: string, value: string) {
    this.id = id;
    this.name = name;
    this.value = value;
  }
}
