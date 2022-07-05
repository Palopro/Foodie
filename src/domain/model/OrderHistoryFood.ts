export class OrderHistoryFood {
  public id: number;
  qty: number;
  public name: string;
  public photo: string;
  public price: number;
  public gallery: Array<string>;

  public constructor(
    id: number,
    qty: number,
    name: string,
    photo: string,
    price: number,
    gallery: Array<string>,
  ) {
    this.id = id;
    this.qty = qty;
    this.name = name;
    this.photo = photo;
    this.price = price;
    this.gallery = gallery;
  }
}
