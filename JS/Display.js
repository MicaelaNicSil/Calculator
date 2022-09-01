class Display{
    constructor(displayLastValue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayLastValue = displayLastValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.actualValue ='';
        this.lastValue ='';
        this.signs = {
            addition: '+',
            division: '%',
            multiplication: 'x',
            substraction: '-',
        }
    }
    erase(){
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.printValues();
    }
    eraseAll(){
        this.actualValue = '';
        this.lastValue = '';
        this.typeOperation = undefined;
        this.printValues();
    }
    compute(type){
        this.typeOperation !== 'equal' && this.calculate();
        this.typeOperation = type;
        this.lastValue = this.actualValue || this.lastValue;
        this.actualValue = '';
        this.printValues();
    }
    addNumber(number) {
        if(number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printValues();
    }
    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayLastValue.textContent = `${this.lastValue} ${this.signs[this.typeOperation] || ''}`;
    }
    calculate(){
        const lastValue = parseFloat(this.lastValue);
        const actualValue = parseFloat(this.actualValue);

        if( isNaN(actualValue) || isNaN(lastValue) ) return
        this.actualValue = this.calculator[this.typeOperation](lastValue, actualValue);
    }

}