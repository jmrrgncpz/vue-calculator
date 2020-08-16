(function(t){function e(e){for(var i,s,u=e[0],o=e[1],c=e[2],l=0,_=[];l<u.length;l++)s=u[l],r[s]&&_.push(r[s][0]),r[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);p&&p(e);while(_.length)_.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"0cb2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history-equation is-size-7"},[n("div",{staticClass:"left has-text-right"},[n("span",[t._v(t._s(t.leftOfEquation)+" =")])]),n("div",{staticClass:"right has-text-right equation-result-container"},[n("span",{staticClass:"equation-result"},[t._v(t._s(t.equation.result))])])])},r=[],a=(n("6b54"),{equation:{type:Object,required:!0,validator:function(t){return!!t.inputsArray.length&&!!t.result.toString()}}}),s={leftOfEquation:function(){var t=this.equation.inputsArray;return t.reduce(function(t,e){return"".concat(t," ").concat(e.text," ")},"")}},u={props:a,computed:s},o=u,c=(n("3c19"),n("2877")),p=Object(c["a"])(o,i,r,!1,null,"131e903f",null);e["a"]=p.exports},"137b":function(t,e,n){"use strict";var i=n("b94f"),r=n.n(i);r.a},2693:function(t,e,n){},"3c19":function(t,e,n){"use strict";var i=n("2693"),r=n.n(i);r.a},"4c1c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("div",{staticClass:"expression-container has-text-right is-size-6"},[t._v("\n      "+t._s(t.expression)+"\n    ")]),n("div",{staticClass:"output-text-container has-text-right is-size-3"},[t._v("\n      "+t._s(t.input)+"\n    ")])])},r=[],a=(n("c5f6"),{inputs:{type:Array,required:!0},input:{type:[Number,String],required:!0}}),s={expression:function(){return this.inputs.reduce(function(t,e){return"".concat(t," ").concat(e.text," ")},"")}},u={props:a,computed:s},o=u,c=(n("137b"),n("2877")),p=Object(c["a"])(o,i,r,!1,null,"75e09ce3",null);e["a"]=p.exports},"565f":function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Projects_vue_calculator_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("75fc"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__),_components_Screen__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4c1c"),_components_InputButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d8cb"),_HistoryEquation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("0cb2"),_input_buttons_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("e7de"),components={screen:_components_Screen__WEBPACK_IMPORTED_MODULE_2__["a"],inputButton:_components_InputButton__WEBPACK_IMPORTED_MODULE_3__["a"],historyEquation:_HistoryEquation__WEBPACK_IMPORTED_MODULE_4__["a"]},data=function(){return{inputsArray:[],input:0,inputButtonsData:_input_buttons_data__WEBPACK_IMPORTED_MODULE_5__["a"],currentOperation:null,newNumberInputReplacesCurrentInput:!0,awaitingOperator:!0,inputHasTransformed:!1,equationHasJustEvaluated:!1,lastOperation:"",history:[],cannotDivideByZeroIsActive:!1}},methods={appendInputToInputs:function(){this.appendExpressionToInputs(this.input)},appendExpressionToInputs:function(t,e){this.inputsArray.push({text:t,expression:""==e||null==e||void 0==e?t:e})},executeButtonAction:function(t,e){e.isDisabledWhenCannotDivideByZeroIsActive&&this.cannotDivideByZeroIsActive||t(this)},readyScreenForNextNumber:function(){this.input=0},clearInputsArray:function(){this.inputsArray=[]},getEvaluation:function getEvaluation(arr){var x=arr||this.inputsArray,inputsArray=x.map(function(t){return t.expression.toString()});while(inputsArray.length>=3){var expression=inputsArray.splice(0,3).reduce(function(t,e){return"".concat(t).concat(e)},"");inputsArray=["(".concat(expression,")")].concat(Object(E_Projects_vue_calculator_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["a"])(inputsArray))}return eval(inputsArray[0])},appendNumberToInput:function(t){if(0!=this.input)return this.input+=t.toString();this.input=t},resetFlags:function(){this.awaitingOperator=!0,this.newNumberInputReplacesCurrentInput=!0,this.inputHasTransformed=!1,this.equationHasJustEvaluated=!1},addEquationToHistory:function(){var t={inputsArray:this.inputsArray,result:this.input};this.history.unshift(t)},clearHistory:function(){this.history=[]},setEquationToScreen:function(t){var e=t.inputsArray,n=t.result;this.awaitingOperator=!0,this.newNumberInputReplacesCurrentInput=!0,this.inputHasTransformed=!0,this.equationHasJustEvaluated=!1,this.lastOperation="",this.inputsArray=e.slice(),this.input=n,this.currentOperation=this.inputsArray.length<2?null:this.inputsArray[this.inputsArray.length-2].text}};__webpack_exports__["a"]={components:components,data:data,methods:methods}},"56d7":function(t,e,n){"use strict";n.r(e);n("c5f6"),n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=n("8a03"),a=n.n(r),s=(n("5abe"),n("15f5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main box"},[n("the-header"),n("div",{staticClass:"panels"},[n("main-panel")],1)],1),n("div",{staticClass:"background-filter"})])}),u=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"window-bar field"},[n("span",{staticClass:"title is-marginless  is-size-6"},[t._v("Calculator")]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"button"},[n("b-icon",{attrs:{icon:"window-minimize is-size-6"}})],1),n("div",{staticClass:"button"},[n("b-icon",{attrs:{icon:"window-maximize is-size-6"}})],1),n("div",{staticClass:"button"},[n("b-icon",{attrs:{icon:"times is-size-6"}})],1)])])},c=[],p=(n("f412"),n("2877")),l={},_=Object(p["a"])(l,o,c,!1,null,"488de351",null),d=_.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panels"},[n("div",{staticClass:"main-panel"},[n("div",{staticClass:"header"},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"bars"}})],1),n("span",{staticClass:"title is-marginless is-size-4"},[t._v("Standard")])]),n("div",{staticClass:"content"},[n("screen",{staticClass:"field",attrs:{inputs:t.inputsArray,input:t.input}}),n("div",{staticClass:"input-buttons-container"},t._l(t.inputButtonsData,function(e,i){return n("input-button",{key:"inputButton-"+i,class:e.class,style:e.style,attrs:{text:e.text,"cannot-divide-by-zero-is-active":t.cannotDivideByZeroIsActive,"is-disabled-when-cannot-divide-by-zero-is-active":e.isDisabledWhenCannotDivideByZeroIsActive},nativeOn:{click:function(n){return t.executeButtonAction(e.action,e)}}})}),1)],1)]),n("div",{staticClass:"sub-panel flex-column"},[t._m(0),t.history.length?n("div",{staticClass:"content history-container flex-1"},[n("div",{staticClass:"history flex-column"},[n("div",{staticClass:"equations-container flex-1"},t._l(t.history,function(e){return n("history-equation",{attrs:{equation:e},nativeOn:{click:function(n){return t.setEquationToScreen(e)}}})}),1),n("div",{staticClass:"clear-button-container"},[n("button",{staticClass:"button btn-clear-history is-pulled-right",on:{click:t.clearHistory}},[n("b-icon",{attrs:{icon:"trash"}})],1)])])]):n("div",[n("strong",{staticClass:"is-size-7"},[t._v("There's no history yet")])])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("span",{staticClass:"title is-size-4 is-marginless"},[t._v("History")])])}],b=n("565f"),h=b["a"],y=(n("5fc5"),Object(p["a"])(h,f,v,!1,null,"7cb45b14",null)),m=y.exports,g={name:"app",components:{theHeader:d,mainPanel:m}},E=g,I=(n("034f"),Object(p["a"])(E,s,u,!1,null,null,null)),x=I.exports;Number.prototype.toPercentage=function(){return.01*this.valueOf()},i["default"].use(a.a,{defaultIconPack:"fas"}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(x)}}).$mount("#app")},"59c2":function(t,e,n){},"5fc5":function(t,e,n){"use strict";var i=n("59c2"),r=n.n(i);r.a},"64a9":function(t,e,n){},"82c7":function(t,e,n){},"8a7a":function(t,e,n){},b94f:function(t,e,n){},d8cb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-button has-text-centered is-size-4",attrs:{disabled:t.cannotDivideByZeroIsActive&&t.isDisabledWhenCannotDivideByZeroIsActive}},[t._v(t._s(t.text))])},r=[],a={text:{type:String,required:!0},cannotDivideByZeroIsActive:{type:Boolean,required:!0},isDisabledWhenCannotDivideByZeroIsActive:{type:Boolean,required:!1,default:!1}},s={props:a},u=s,o=(n("e302"),n("2877")),c=Object(o["a"])(u,i,r,!1,null,null,null);e["a"]=c.exports},e302:function(t,e,n){"use strict";var i=n("8a7a"),r=n.n(i);r.a},e7de:function(t,e,n){"use strict";var i=n("75fc"),r=n("cebc"),a=function(){var t=[{text:"+",value:"+",style:{"grid-row":5,"grid-column":4}},{text:"−",value:"-",style:{"grid-row":4,"grid-column":4}},{text:"×",value:"*",style:{"grid-row":3,"grid-column":4}},{text:"÷",value:"/",style:{"grid-row":2,"grid-column":4}}];return t.map(function(t){return t.action=function(e){var n=t.value;e.inputHasTransformed?(e.input=e.getEvaluation(),e.inputHasTransformed=!1):e.awaitingOperator?(e.appendInputToInputs(),e.input=e.getEvaluation(),e.awaitingOperator=!1):e.inputsArray.pop(),e.appendExpressionToInputs(t.text,t.value),e.currentOperation=n,e.newNumberInputReplacesCurrentInput=!0,e.equationHasJustEvaluated=!1},t.isDisabledWhenCannotDivideByZeroIsActive=!0,t})},s=a(),u=(n("6b54"),[{text:"CE",class:"clear-entry-button",action:function(t){t.readyScreenForNextNumber()}},{text:"C",class:"clear-button",action:function(t){t.clearInputsArray(),t.readyScreenForNextNumber(),t.resetFlags()}},{text:"",class:"backspace-button fas fa-backspace",action:function(t){if(!t.newNumberInputReplacesCurrentInput)if(1!=t.input.toString().length){var e=t.input.toString().slice(0,-1);t.input=parseInt(e)}else t.input=0}}]),o=function(t){return{text:t.toString(),class:"number-input",action:function(e){e.inputHasTransformed&&e.inputsArray.pop(),e.newNumberInputReplacesCurrentInput&&(e.readyScreenForNextNumber(),e.newNumberInputReplacesCurrentInput=!1),e.appendNumberToInput(t),e.awaitingOperator=!0,e.equationHasJustEvaluated=!1,e.inputHasTransformed=!1}}},c=function(){for(var t=[],e=[7,8,9,4,5,6,1,2,3,0],n=0,i=e;n<i.length;n++){var r=i[n],a=o(r);t.push(a)}return t},p=c(),l=Object(r["a"])({},o("."),{style:{"grid-row":6,"grid-column":3},isDisabledWhenCannotDivideByZeroIsActive:!0}),_={text:"=",action:function(t){t.inputHasTransformed||t.appendInputToInputs(),t.equationHasJustEvaluated&&t.lastOperation.length>=2?t.inputsArray=t.inputsArray.concat(t.lastOperation):t.lastOperation=t.inputsArray.slice(-2),t.input=t.getEvaluation(),t.addEquationToHistory(),t.clearInputsArray(),t.newNumberInputReplacesCurrentInput=!0,t.awaitingOperator=!0,t.equationHasJustEvaluated=!0,t.inputHasTransformed=!1},style:{"grid-row":6,"grid-column":4}},d={text:"%",action:function(t){if(t.inputsArray.length<2)t.input=0;else if(t.inputHasTransformed){var e=t.inputsArray[t.inputsArray.length-1].expression;if("+"==t.currentOperation||"-"==t.currentOperation){var n=t.inputsArray.slice(0,-2),i=t.getEvaluation(n),r=parseFloat(e).toPercentage(),a=i*r;t.input=a}else t.input=parseFloat(e).toPercentage();t.inputsArray.pop()}else if("+"==t.currentOperation||"-"==t.currentOperation){var s=t.getEvaluation(),u=parseFloat(t.input).toPercentage(),o=s*u;t.input=o}else t.input=parseFloat(t.input).toPercentage();t.appendInputToInputs(),t.newNumberInputReplacesCurrentInput=!0,t.awaitingOperator=!0,t.inputHasTransformed=!0,t.equationHasJustEvaluated=!1},style:{"grid-row":1,"grid-column":1},isDisabledWhenCannotDivideByZeroIsActive:!0},f={text:"√",action:function(t){var e=Math.sqrt(t.input);t.appendExpressionToInputs("√(".concat(t.input,")"),e),t.input=e,t.newNumberInputReplacesCurrentInput=!0,t.awaitingOperator=!0,t.inputHasTransformed=!0,t.equationHasJustEvaluated=!1},style:{"grid-row":1,"grid-column":2},isDisabledWhenCannotDivideByZeroIsActive:!0},v={text:"x²",class:"",action:function(t){var e=t.input*t.input;t.appendExpressionToInputs("sqr(".concat(t.input,")"),e),t.input=e,t.newNumberInputReplacesCurrentInput=!0,t.awaitingOperator=!0,t.inputHasTransformed=!0,t.equationHasJustEvaluated=!1},style:{"grid-row":1,"grid-column":3},isDisabledWhenCannotDivideByZeroIsActive:!0},b={text:"1/x",class:"",action:function(t){if(0==t.input)return t.appendExpressionToInputs("1/(0)",0),t.input="Cannot divide by zero",void(t.cannotDivideByZeroIsActive=!0);var e=1/t.input;t.appendExpressionToInputs("1/(".concat(t.input,")"),e),t.input=e,t.newNumberInputReplacesCurrentInput=!0,t.awaitingOperator=!0,t.inputHasTransformed=!0,t.equationHasJustEvaluated=!1},style:{"grid-row":1,"grid-column":4},isDisabledWhenCannotDivideByZeroIsActive:!0},h={text:"±",class:"",action:function(t){0!=t.input&&(t.inputHasTransformed||(t.input=-t.input))},style:{"grid-row":6,"grid-column":1},isDisabledWhenCannotDivideByZeroIsActive:!0};e["a"]=[].concat(Object(i["a"])(u),Object(i["a"])(p),Object(i["a"])(s),[_,d,f,v,h,b,l])},f412:function(t,e,n){"use strict";var i=n("82c7"),r=n.n(i);r.a}});
//# sourceMappingURL=app.0ccb738a.js.map