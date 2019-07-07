export default [
    {
        text: "CE",
        class: "clear-entry-button",
        action: function (context) {
            context.readyScreenForNextNumber();
        }
    },
    {
        text: "C",
        class: "clear-button",
        action: function (context) {
            context.clearInputsArray();
            context.readyScreenForNextNumber();
            context.resetFlags();
        }
    },
    {
        text: "",
        class: "backspace-button fas fa-backspace",
        action: function (context) {
            if(context.newNumberInputReplacesCurrentInput) return;
            
            if (context.input.toString().length == 1) {
                context.input = 0;
                return;
            }

            const newInput = context.input.toString().slice(0, -1);
            context.input = parseInt(newInput);
        }
    }
];