import { CartFood } from './CartFood';

export class Order {
  public address: string;
  public phone: string;
  public deliveryMethod: string;
  public paymentMethod: string;
  public userPermissionUser: number;
  public items: Array<CartFood>;

  public constructor(
    address: string,
    phone: string,
    deliveryMethod: string,
    paymentMethod: string,
    userPermissionUser: number,
    items: Array<CartFood>,
  ) {
    this.address = address;
    this.phone = phone;
    this.deliveryMethod = deliveryMethod;
    this.paymentMethod = paymentMethod;
    this.userPermissionUser = userPermissionUser;
    this.items = items;
  }
}
