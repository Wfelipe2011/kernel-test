"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
    }
    getOrderId() {
        return this.orderId;
    }
    getAmount() {
        return this.amount;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map