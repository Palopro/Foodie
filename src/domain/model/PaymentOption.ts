export class PaymentOption {
  public id: number;
  public name: string;
  public value: string;
  public image: string;
  public bgColor: string;

  public constructor(
    id: number,
    name: string,
    value: string,
    image: string,
    bgColor: string,
  ) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.image = image;
    this.bgColor = bgColor;
  }
}
