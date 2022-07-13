import { CartFood } from './CartFood';

export class Order {
  public address: string;
  public phone: string;
  public deliveryMethod: string;
  public paymentMethod: string;
  public items: Array<CartFood>;
  public id?: number;
  public userPermissionUser?: number;

  public constructor(
    address: string,
    phone: string,
    deliveryMethod: string,
    paymentMethod: string,
    items: Array<CartFood>,
    id?: number,
    userPermissionUser?: number,
  ) {
    this.address = address;
    this.phone = phone;
    this.deliveryMethod = deliveryMethod;
    this.paymentMethod = paymentMethod;
    this.items = items;
    this.id = id;
    this.userPermissionUser = userPermissionUser;
  }
}
