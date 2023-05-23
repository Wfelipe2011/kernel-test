export declare class Order {
    private orderId;
    private amount;
    constructor(orderId: string, amount: number);
    getOrderId(): string;
    getAmount(): number;
}
