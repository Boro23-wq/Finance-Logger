// imports
import { Invoice } from './classes/Invoice.js'

// new instances of the class imported
const invOne = new Invoice('Sintu', 'UI/UX', 3000);
const invTwo = new Invoice('Sam', 'Portfolio Website', 6000);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach((inv) => {
    console.log(inv.format());
})

// grabbing the form element
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// grab the inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e : Event) => {
    e.preventDefault()

    console.log (
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})