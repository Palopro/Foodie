import { Category } from '../../../../domain/model/Category';

export class CategoryDTO {
  public id: number;
  public attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };

  public constructor(
    id: number,
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    },
  ) {
    this.id = id;
    this.attributes = attributes;
  }

  public static parseFromJSON = (json: CategoryDTO) =>
    new Category(json.id, json.attributes.name);
}
