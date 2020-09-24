const display = document.querySelector('.display');

document.querySelectorAll('.digits button').forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    const digit = ev.target.innerText;
    display.value += digit;
}

document.querySelectorAll('.opers button').forEach(button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    const lastSymbol = Number(display.value[display.value.length - 1]);
    const oper = ev.target.innerText;
    if (isNaN(lastSymbol)) {
        console.log(lastSymbol);
        display.value = display.value.substring(0, display.value.length - 1);
    }

    display.value += oper;
}

document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}

document.querySelector('.reset').addEventListener('click', resetPressed);

function resetPressed() {
    display.value = '';
}

document.querySelector('.back').addEventListener('click', backPressed);

function backPressed() {
    display.value = display.value.substring(0, display.value.length - 1);
}