import { OrderHistoryFood } from './OrderHistoryFood';

export class OrderHistory {
  public id: number;
  public address: string;
  public phone: string;
  public deliveryMethod: string;
  public paymentMethod: string;
  public items: Array<OrderHistoryFood>;

  public constructor(
    id: number,
    address: string,
    phone: string,
    deliveryMethod: string,
    paymentMethod: string,
    items: Array<OrderHistoryFood>,
  ) {
    this.id = id;
    this.address = address;
    this.phone = phone;
    this.deliveryMethod = deliveryMethod;
    this.paymentMethod = paymentMethod;
    this.items = items;
  }
}
