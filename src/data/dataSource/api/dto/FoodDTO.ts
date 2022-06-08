import { Food } from '../../../../domain/model/Food';
import { CategoryDTO } from './CategoryDTO';

export interface FoodDTO {
  id: number;
  attributes: {
    name: string;
    price: number;
    photo: string;
    gallery: Array<string>;
    categories: {
      data: Array<CategoryDTO>;
    };
  };
}

export const mapToFood = (foodDTO: FoodDTO) =>
  new Food(
    foodDTO.id,
    foodDTO.attributes.name,
    foodDTO.attributes.price,
    foodDTO.attributes.photo,
    foodDTO.attributes.categories.data.map((cat: CategoryDTO) => cat.id),
  );
