import { Food } from '../../../../domain/model/Food';

export class FoodDTO {
  public id: number;
  public attributes: {
    name: string;
    price: number;
    photo: string;
    gallery: Array<string>;
  };

  public constructor(
    id: number,
    attributes: {
      name: string;
      price: number;
      photo: string;
      gallery: Array<string>;
    },
  ) {
    this.id = id;
    this.attributes = attributes;
  }

  public static parseFromJSON = (json: FoodDTO) =>
    new Food(
      json.id,
      json.attributes.name,
      json.attributes.price,
      json.attributes.photo,
    );
}
