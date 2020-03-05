import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    currentDisplay = "";
    numberToOperate = "";
    latestOperation = "";
    formula = "";
    enterNumber(event) {
        this.currentDisplay += event.target.dataset.id;
    }
    enterOperation(event) {
        switch(event.target.dataset.id) {
            case 'a':
                console.log('addition')
                this.numberToOperate = this.currentDisplay;
                this.latestOperation = 'a';
                this.currentDisplay = "";
                this.formula += this.numberToOperate  + "+";
                this.closeOperations();
                break;
            case 'b':
                console.log('subtraction');
                this.numberToOperate = this.currentDisplay;
                this.latestOperation = 'b';
                this.currentDisplay = "";
                this.formula += this.numberToOperate  + "-";
                this.closeOperations();
                break;
            case 'd':
                console.log('clearing');
                this.numberToOperate = "";
                this.latestOperation = "";
                this.currentDisplay = "";
                this.formula = "";
                this.openOperations();
                break;
            default:
              // code block
          }
    }
    enterEquals() {       
        console.log('equals');
        switch(this.latestOperation) {
            case 'a':
                this.formula += this.currentDisplay;
                this.currentDisplay = parseInt(this.numberToOperate) +  parseInt(this.currentDisplay);
                this.formula += "=" + this.currentDisplay;
                this.numberToOperate = this.currentDisplay;
                this.openOperations();
                break;
            case 'b':
                this.formula += this.currentDisplay;
                this.currentDisplay = parseInt(this.numberToOperate) - parseInt(this.currentDisplay);
                this.numberToOperate  = this.currentDisplay;
                this.formula += "=" + this.currentDisplay;
                this.openOperations();
                break;
            default: 
        }
    }
    
    closeOperations(){
        var buttons = this.template.querySelectorAll('button');
        [].forEach.call(buttons, function(button){
            if((button.dataset.id == 'a') || (button.dataset.id == 'b') || (button.dataset.id == 'c')
            || (button.dataset.id == 'f')) {
                    button.disabled = true;
            }
        });
    }

    openOperations(){
        console.log("opening operations");
        var buttons = this.template.querySelectorAll('button');
        [].forEach.call(buttons, function(button){
            if((button.dataset.id == 'a') || (button.dataset.id == 'b') || (button.dataset.id == 'c')
            || (button.dataset.id == 'f')) {
                    button.disabled = false;
            }
        });
    }
}