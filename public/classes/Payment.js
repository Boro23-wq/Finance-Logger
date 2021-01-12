// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} will receive payment of amount ₹${this.amount} for ${this.details}.`;
    }
}
