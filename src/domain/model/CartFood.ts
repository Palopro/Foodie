export class CartFood {
  public id: number;
  public qty: number;
  public name: string;
  public price: number;
  public photo: string;
  public gallery: Array<string>;

  public constructor(
    id: number,
    qty: number,
    name: string,
    price: number,
    photo: string,
    gallery: Array<string>,
  ) {
    this.id = id;
    this.qty = qty;
    this.name = name;
    this.price = price;
    this.photo = photo;
    this.gallery = gallery;
  }
}
