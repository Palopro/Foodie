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
