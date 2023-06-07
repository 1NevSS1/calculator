let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

// screen
const out = document.querySelector('.calc-screen p');

function reset () {
    a = ''; // first number result
    b = ''; // second number
    sign = ''; //operation sing
    finish = false;
    out.textContent = 0;
}

document.querySelector('.res').onclick = reset;

document.querySelector('.buttons').onclick = (event) => {
    // the button is not pressed
    if (!event.target.classList.contains('btn')) return;
    // the (return) button is pressed
    if (event.target.classList.contains('res')) return;

    out.textContent = '';
    // detection of the pressed button
    const key = event.target.textContent;
    
    // 0 - 9 or .
    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
        a +=key;
        
        out.textContent = a;
        }
        else if (a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = a;
        }
        else {
            b +=key
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    // +, -, /, *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // =======
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "+":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}