import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    currentDisplay = "";
    numberToOperate = "";
    latestOperation = "";
    enterNumber(event) {
        this.currentDisplay += event.target.dataset.id;
    }
    enterOperation(event) {
        switch(event.target.dataset.id) {
            case 'a':
                console.log('addition');
                this.numberToOperate = this.currentDisplay;
                this.latestOperation = 'a';
                this.currentDisplay = "";
              break;
            case 'b':
              console.log('subtraction');
              this.numberToOperate = this.currentDisplay;
              this.latestOperation = 'b';
              this.currentDisplay = "";
              break;
            case 'd':
                console.log('clearing');
                this.numberToOperate = "";
                this.latestOperation = "";
                this.currentDisplay = "";
                break;
            default:
              // code block
          }
    }
    enterEquals() {       
        console.log('equals');
        switch(this.latestOperation) {
            case 'a':
                this.currentDisplay = parseInt(this.numberToOperate) +  parseInt(this.currentDisplay);
                this.numberToOperate  = this.currentDisplay;
                break;
            case 'b':
                this.currentDisplay = parseInt(this.numberToOperate) - parseInt(this.currentDisplay);
                this.numberToOperate  = this.currentDisplay;
                break;
            default: 
        }
    }
}