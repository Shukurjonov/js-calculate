let arxivInput = document.querySelector(".arxiv_input");
let displayInput = document.querySelector(".display_input");

let mod = document.querySelector(".mod")
let CE = document.querySelector(".CE")
let C = document.querySelector(".C")

let reverse = document.querySelector(".reverse")
let sqr = document.querySelector(".sqr")
let sqrt = document.querySelector(".sqrt")
let division = document.querySelector(".division")

let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let multp = document.querySelector(".multp")

let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let minus = document.querySelector(".minus")

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let tree = document.querySelector(".tree")
let plus = document.querySelector(".plus")

let change = document.querySelector(".change")
let zero = document.querySelector(".zero")
let dot = document.querySelector(".dot")
let equal = document.querySelector(".equal")

let amal = false;
let dotBool = false;
let result;
let tempValue;
let operator = false;
let keyBool = false;
let tenglik = false;


function labelAdd(number){
    if (displayInput.value != 0 && !amal && !operator || keyBool){
        displayInput.value += number;
    }
    else if (tenglik){
        displayInput.value = number;
        arxivInput.value = null;
        tenglik = false;
    } else {
        if (number != 0){
            displayInput.value = number;
            keyBool = true;
        }
    }
    
}

let lastOperator = null;
function calc(name, a){
    
    if (operator == true && keyBool){
        operator = false;
        amal = true;  
        let natija;
        
        switch(name){
            case "add": 
                natija =(tempValue - 0) + (displayInput.value - 0);
                arxivInput.value = natija;
                displayInput.value = natija;
                a = arxivInput.value;
                break;

            case "min": 
                natija =(tempValue - 0) - (displayInput.value - 0);
                console.log(natija)
                arxivInput.value = natija;
                displayInput.value = natija;
                a = arxivInput.value;
                
                arxivInput.value += " - ";
                break;

            case "div": 
            natija =(tempValue - 0) / (displayInput.value - 0);
                arxivInput.value = natija;
                displayInput.value = natija;
                a = arxivInput.value;
                
                arxivInput.value += " / ";
                break;

            case "mult": 
            natija =(tempValue - 0) * (displayInput.value - 0);
                arxivInput.value = natija;
                displayInput.value = natija;
                a = arxivInput.value;  
                arxivInput.value += " * ";
                break;

            case "teng":
                arxivInput.value += displayInput.value + " = ";
                switch (lastOperator){
                    case "add": {
                        natija =(tempValue - 0) + (displayInput.value - 0);
                        break;
                    }
                    case "min": {
                        natija =(tempValue - 0) - (displayInput.value - 0);
                        break;
                    }
                    case "div": {
                        natija =(tempValue - 0) / (displayInput.value - 0);
                        break;
                    }
                    case "mult": {
                        natija =(tempValue - 0) * (displayInput.value - 0);
                        break;
                    }
                }
                displayInput.value = natija;
        }

        lastOperator = null;
    }


    if (name === "add" && lastOperator !== "add" ){
        operator = true;
        keyBool = false;
        tenglik = false;
        arxivInput.value = a + ' + ';
        tempValue = a;
        lastOperator = "add";
    }

    if (name === "min" && lastOperator !== "min" ){
        operator = true;
        keyBool = false;
        tenglik = false;
        arxivInput.value = a + ' - ';
        tempValue = a;
        lastOperator = "min";
        console.log("min");
       console.log(arxivInput.value);
       console.log(a)
    }

    if (name === "div" && lastOperator !== "div" ){
        operator = true;
        keyBool = false;
        tenglik = false;
        arxivInput.value = a + ' / ';
        tempValue = a;
        lastOperator = "div";
    }

    if (name === "mult" && lastOperator !== "mult" ){
        operator = true;
        keyBool = false;
        tenglik = false;
        arxivInput.value = a + ' * ';
        tempValue = a;
        lastOperator = "mult";
    }
}


plus.addEventListener("click", function(){
    calc('add', displayInput.value);
})

minus.addEventListener("click", function(){
    calc('min', displayInput.value);
})

division.addEventListener("click", function(){
    calc('div', displayInput.value);
})

multp.addEventListener("click", function(){
    calc('mult', displayInput.value);
})

equal.addEventListener("click", function(){
    calc("teng", displayInput.value);
    tenglik = true;
    keyBool = false;
})

one.addEventListener('click', function(){
    labelAdd(one.textContent);
})

two.addEventListener('click', function(){
    labelAdd(two.textContent);
})

tree.addEventListener('click', function(){
    labelAdd(tree.textContent);
})

four.addEventListener('click', function(){
    labelAdd(four.textContent);
})
five.addEventListener('click', function(){
    labelAdd(five.textContent);
})

six.addEventListener('click', function(){
    labelAdd(six.textContent);
})
seven.addEventListener('click', function(){
    labelAdd(seven.textContent);
})

eight.addEventListener('click', function(){
    labelAdd(eight.textContent);
})

nine.addEventListener('click', function(){
    labelAdd(nine.textContent);
})

zero.addEventListener('click', function(){
    labelAdd(zero.textContent);
})

CE.addEventListener('click', function(){
    displayInput.value = 0; 
    if (tenglik){
        arxivInput.value = null;
        tempValue = 0
        amal = false;
        operator = false;
        displayInput.value = 0; 
        lastOperator = null;
        dotBool = false;
    }   
})

C.addEventListener('click', function(){
    arxivInput.value = null;
    tempValue = 0
    amal = false;
    operator = false;
    displayInput.value = 0; 
    lastOperator = null;
    dotBool = false;
})

reverse.addEventListener('click', function(){
    arxivInput.value = "1/(" + displayInput.value + ")";
    result = 1 / Number(displayInput.value);
    amal = true;

    displayInput.value = result;
})


sqr.addEventListener("click", function(){
    arxivInput.value = "sqr(" + displayInput.value + ")";
    result = Math.pow(displayInput.value, 2);
    amal = true;
    keyBool = false;
    displayInput.value = result;  
})

sqrt.addEventListener("click", function(){
    arxivInput.value = "sqrt(" + displayInput.value + ")";
    result = Math.sqrt(displayInput.value);
    amal = true;
    keyBool = false;

    displayInput.value = result;    
})

change.addEventListener("click", function(){
    if (tenglik){
        displayInput.value = 0;
        arxivInput.value = null;
        tenglik = false;
        // keyBool = true;
    }

    result = -1 * (displayInput.value);
    displayInput.value = result; 
})

dot.addEventListener("click", function(){
    if (tenglik){
        displayInput.value = 0;
        arxivInput.value = null;
        tenglik = false;
        // keyBool = true; 
    }

    if (!dotBool){
        result = (displayInput.value) + '.';
        dotBool = true;
    }
    else {
        result = displayInput.value;
    }
  
    displayInput.value = result;    
})