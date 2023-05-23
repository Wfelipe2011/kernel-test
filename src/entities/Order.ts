
export class Order {
  private orderId: string;
  private amount: number;

  constructor(orderId: string, amount: number) {
    this.orderId = orderId;
    this.amount = amount;
  }

  public getOrderId(): string {
    return this.orderId;
  }

  public getAmount(): number {
    return this.amount * 2;
  }
}
