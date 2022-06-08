import { Category } from '../../../../domain/model/Category';

export interface CategoryDTO {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export const mapToCategory = (categoryDTO: CategoryDTO) =>
  new Category(categoryDTO.id, categoryDTO.attributes.name);
