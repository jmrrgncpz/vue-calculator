const generateNumberInputs = function(){
    const numbersInputs = [];
    for(let i = 0; i <= 9; i++){
        const numberInput = {
            text : i.toString(),
            action : function(context){
                if(context.expression == "0") context.expression = i.toString();
                else context.expression += i.toString();
            }
        }

        numbersInputs.push(numberInput);
    }

    return numbersInputs
}

const operationInputs = function(){

}

export default [
    ...generateNumberInputs(),
]