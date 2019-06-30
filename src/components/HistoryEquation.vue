<template>
<div class="history-equation is-size-7">
    <div class="left has-text-right">
        {{ leftOfEquation }} =
    </div>
    <div class="right has-text-right">
        {{ equation.result }}
    </div>
</div>
</template>
<script>
const props = {
    equation : {
        type : Object,
        required : true,
        validator : (value) => {
            return !!value.inputsArray.length && !!value.result;
        }
    }
}

const computed = {
    leftOfEquation : function(){
        const inputsArray = this.equation.inputsArray;
        return inputsArray.reduce((acc, curr) => `${acc} ${curr.text} `, "")
    }
}
export default {
    props,
    computed
}
</script>
<style scoped>
    .history-equation{
        padding : .5em;
        cursor: pointer;
    }

    .history-equation .right{
        font-size: 2em;
    }

    .history-equation:hover{
        background : rgba(255,255,255,.7);
        border-radius: .25em;
    }
</style>

