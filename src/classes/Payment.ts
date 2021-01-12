import  {HasFormatter } from '../interfaces/HasFormatter.js'

// classes
export class Payment implements HasFormatter {
    constructor(
        readonly recipient:  string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} will receive payment of amount ₹${this.amount} for ${this.details}.`;
    }
}
