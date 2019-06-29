import { createNumberInput } from "./numberInputFactory.js";

const generateNumberInputs = function () {
    const numbersInputs = [];
    const numbers = [7,8,9,4,5,6,1,2,3,0];
    for(let number of numbers){
        const numberInput = createNumberInput(number);
        numbersInputs.push(numberInput);
    }

    return numbersInputs
}

export default generateNumberInputs();