import { add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv } from './calculator.js';
$(document).ready(function() {
    
    const $num1 = $('#num1');
    const $num2 = $('#num2');
    const $operator = $('#symbol');
    const $result = $('#result');

    $('#btn_add').on('click', () => $operator.val('+'));
    $('#btn_sub').on('click', () => $operator.val('-'));
    $('#btn_mul').on('click', () => $operator.val('*'));
    $('#btn_div').on('click', () => $operator.val('/'));
    
    $('#btn_res').on('click', function() {
        let number1 = parseFloat($num1.val());
        let number2 = parseFloat($num2.val());
        let opeval = $operator.val();


        if (!number1 && number1 !== 0) {
            alert("Plz enter num1");
            return;
        }

        if (!number2 && number2 !== 0) {
            alert("Plz enter num2");
            return;
        }

        if (!opeval) {
            alert("Please select operation");
            return;
        }
    let FResult;
        switch (opeval) {
            case '+':
                FResult = funcAdd(number1, number2);
                break;
            case '-':
                FResult = funcSub(number1, number2);
                break;
            case '*':
                FResult = funcMul(number1, number2);
                break;
            case '/':
                FResult = funcDiv(number1, number2);
                break;
        }
        $result.val(FResult);
    });
});