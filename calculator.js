const digit = document.querySelectorAll('.digit')
const currentoutput = document.querySelector('.current')
const previousoutput = document.querySelector('.previous')
const groupbox = document.querySelector('fieldset')
const operator = document.querySelectorAll('.operator')
const equalto = document.querySelector('.equalto');
const reset = document.querySelector('.reset');
const backspace = document.querySelector('.backspace');
const displayoperator = document.querySelector('.display_operator')
const body = document.querySelector('body')
// console.log(currentoutput)
// console.log(digit)
// console.log(groupbox)

var append_digit = "";
var isoperatorclicked;
var compute = "", sign = "";
var answer = 0;
var isreset = true;
var data_array = [];
var mysign = "";

digit.forEach(digit=>{digit.addEventListener('click', ()=>{

    (compute==="=") && ( compute="", data_array=[], mysign="");
    console.log(currentoutput.innerText==="0"?
    (append_digit = digit.innerText): (append_digit += digit.innerText));
    
    console.log(currentoutput.innerText = append_digit)
})})

groupbox.addEventListener('click', function(e){
    const target = e.target;
    isoperatorclicked = target.matches('.operator')

    if (target.matches('.operator')) {
        (compute==="=") && (previousoutput.innerText = "")
        currentoutput.innerText = computation(target.innerText)
        //previousoutput.innerHTML = currentoutput.innerText + `<sup class='computer'>`+target.innerText+`<\sup>`
        //console.log(currentoutput.previousSibling.textContent = target.innerText)
        console.log(displayoperator)
        console.log(currentoutput.previousElementSibling.innerText = target.innerText)
        data_figure(mysign);
        append_digit = "";
    }
    else if(target.matches('.equalto')){
        previousoutput.innerText = currentoutput.innerText 
        append_digit = "";
        console.log(currentoutput.previousElementSibling.innerText = "")
    }
    else if(target.matches('.add_decimal')){
        !append_digit.toString().includes(".") && (append_digit===""?(append_digit+="0."):append_digit += ".");
        currentoutput.innerText = append_digit;
    }

    console.log(isoperatorclicked)
    console.log(groupbox)
}, {once : isoperatorclicked})

equalto.addEventListener('click', ()=>{
    currentoutput.innerText = computation(sign);
    compute = "=";
    data_array = [];
    data_array.push(eval(currentoutput.innerText));
})

reset.addEventListener('click', ()=>{
    answer=0; append_digit = ""; compute=""; sign=""; isreset = true; mysign = "";
    currentoutput.previousElementSibling.innerText = "";
    data_array = []; currentoutput.innerText = "0"; previousoutput.innerText ="0";

    console.log(deletebtn.parentElement)
    console.log(task.parentElement)
})

backspace.addEventListener('click', () =>{
    append_digit = append_digit.substring(0, append_digit.length - 1);
    currentoutput.innerText = append_digit.length<=0?0:append_digit
})

function data_figure(operator_type) {
    
    if ((!data_array.toString().includes(operator_type) && append_digit.length>=1) || (data_array.toString().length >= 12)){
        const eval_array = eval(data_array.join("").toString());
        console.log(data_array.toString().length)
        data_array = [];
        data_array.push(eval_array);
    }
    (append_digit.length>0) && data_array.push(operator_type.toString() + append_digit);
    previousoutput.innerText = "("+data_array.join("").toString()+")";
    return console.log(data_array)
}

function computation(sign) {
    switch (compute) {
        case "+": {
            answer += Number(append_digit);
            mysign = "+"
            break;
        }
        case "-": {
            answer -= Number(append_digit);
            mysign = "-"
            break;
        }
        case "*": {
            answer *= Number(append_digit.length)<=0? (1):Number(append_digit);
            mysign = "*"
            break;
        }
        case "/": {
            answer /= Number(append_digit.length)<=0? (1):Number(append_digit);
            mysign = "/"
            break;
        }
        case "=":{
            append_digit = answer;
            break;
        }
        // case "":{
        //     answer = Number(append_digit);
        //     break;
            
        // }
        default:{
            answer = Number(append_digit);
            break;
            
        }
      
    }
        //console.log(answer)
        compute = sign.toString();
        return answer.toString();
}