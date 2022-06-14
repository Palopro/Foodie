export class Food {
  public id: number;
  public name: string;
  public price: number;
  public photo: string;
  public categories: Array<number>;
  public gallery: Array<string>;

  public constructor(
    id: number,
    name: string,
    price: number,
    photo: string,
    categories: Array<number>,
    gallery: Array<string>,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.photo = photo;
    this.categories = categories;
    this.gallery = gallery;
  }
}
