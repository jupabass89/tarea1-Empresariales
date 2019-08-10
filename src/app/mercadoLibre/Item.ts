export class Item {
  id: string;
  thumbnail: string;
  condition: string;
  price: number;
  sold_quantity: number;
  title: string;
  seller: {
    id: number;
    power_seller_status: string;
};

  constructor({ id, thumbnail, condition, price, sold_quantity, title }) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.condition = condition;
    this.price = price;
    this.sold_quantity = sold_quantity;
    this.title = title;
  }
}
