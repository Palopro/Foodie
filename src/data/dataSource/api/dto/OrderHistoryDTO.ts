import { OrderHistoryFoodDTO } from './OrderHistoryFoodDTO';

export interface OrderHistoryDTO {
  id: number;
  attributes: {
    address: string;
    phone: string;
    delivery_method: string;
    payment: string;
    items: Array<OrderHistoryFoodDTO>;
  };
}
