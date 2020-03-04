import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    enterNumber(event) {
        alert("ID: " + event.target.dataset.id);
    }
}