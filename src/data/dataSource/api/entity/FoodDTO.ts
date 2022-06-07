import { Food } from '../../../../domain/model/Food';
import { CategoryDTO } from './CategoryDTO';
import reactotron from 'reactotron-react-native';

export class FoodDTO {
  public id: number;
  public attributes: {
    name: string;
    price: number;
    photo: string;
    gallery: Array<string>;
    categories: {
      data: Array<CategoryDTO>;
    };
  };

  public constructor(
    id: number,
    attributes: {
      name: string;
      price: number;
      photo: string;
      gallery: Array<string>;
      categories: { data: Array<CategoryDTO> };
    },
  ) {
    this.id = id;
    this.attributes = attributes;
  }

  public static parseFromJSON = (json: FoodDTO) => {
    reactotron.log({ json });

    return new Food(
      json.id,
      json.attributes.name,
      json.attributes.price,
      json.attributes.photo,
      json.attributes.categories.data.map((cat: CategoryDTO) => cat.id),
    );
  };
}
