// imports
import { Invoice } from './classes/Invoice.js';
// new instances of the class imported
const invOne = new Invoice('Sintu', 'UI/UX', 3000);
const invTwo = new Invoice('Sam', 'Portfolio Website', 6000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.format());
});
// grabbing the form element
const form = document.querySelector('.new-item-form');
// grab the inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
