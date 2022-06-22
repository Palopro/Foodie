import { FoodDTO } from './FoodDTO';

export interface OrderDTO {
  address: string;
  phone: string;
  delivery_method: string;
  payment: string;
  users_permissions_user: number;
  items: Array<FoodDTO>;
}
