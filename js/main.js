import TipCalculator from './TipCalculator.mjs'

const tipCalculator = new TipCalculator()

const BILL_INPUT = document.getElementById('bill-input')
const TIP_BTNS = document.getElementsByClassName('btn-tip')
const CUSTOM_INPUT = document.getElementById('input-custom')
const USER_NUMBER = document.getElementById('user-number')
const RESET_BTN = document.getElementById('reset-btn')
const TIP_OUTPUT = document.getElementById('tip-span')
const TOTAL_OUTPUT = document.getElementById('total-span')
const N_INPUT_CONTAINER = document.querySelector('.number-input-container')
const TEXT_CONTAINER_ERROR = document.getElementById('text-container-error')
const SPAN_ERROR = document.getElementById('error-cero')

function assignBill() {
    tipCalculator.setBill = BILL_INPUT.value
    calculateTip()
}

function assignCustomTip() {
    removeBtnColor()
    if (CUSTOM_INPUT.value == '') {
        CUSTOM_INPUT.value = 0
    }
    tipCalculator.setTipPercentage = parseInt(CUSTOM_INPUT.value) / 100
    calculateTip()
}

function removeBtnColor() {
    for (let i = 0; i < TIP_BTNS.length; i++) {
        TIP_BTNS[i].removeAttribute('style')
    }
}

function userNumberVerification() {
    if (USER_NUMBER.value == 0) {
        SPAN_ERROR.removeAttribute('style')
        N_INPUT_CONTAINER.setAttribute('id', 'number-input--error')
        for (let i = 0; i < 2; i++) {
            TEXT_CONTAINER_ERROR.querySelectorAll("span")[i].setAttribute('style', 'width: 40%')
        }
    } else {
        N_INPUT_CONTAINER.removeAttribute('id')
        for (let i = 0; i < 2; i++) {
            TEXT_CONTAINER_ERROR.querySelectorAll("span")[i].removeAttribute('style')
        }
        SPAN_ERROR.setAttribute('style', 'display: none')
        tipCalculator.setNumberPeople = USER_NUMBER.value
        calculateTip()
    }
}

function resetCalculator() {
    tipCalculator.reset()
    BILL_INPUT.value = ''
    CUSTOM_INPUT.value = ''
    USER_NUMBER.value = ''
    TIP_OUTPUT.innerHTML = `\$${tipCalculator.getTipPerson.toFixed(2)}`
    TOTAL_OUTPUT.innerHTML = `\$${tipCalculator.getTotalPerson.toFixed(2)}`
    removeBtnColor()
}

function calculateTip() {
    tipCalculator.calculateTotal()
    TIP_OUTPUT.innerHTML = `\$${tipCalculator.getTipPerson.toFixed(2)}`
    TOTAL_OUTPUT.innerHTML = `\$${tipCalculator.getTotalPerson.toFixed(2)}`
}

for (let i = 0; i < TIP_BTNS.length; i++) {
    TIP_BTNS[i].addEventListener('click', () => {
        removeBtnColor()
        tipCalculator.setTipPercentage = parseInt(TIP_BTNS[i].innerHTML.replace('%', '')) / 100
        TIP_BTNS[i].setAttribute('style', 'color: var(--very-dark-cyan); background-color: #9de9df;')
        calculateTip()
    })
}
BILL_INPUT.addEventListener('input', assignBill)
CUSTOM_INPUT.addEventListener('input', assignCustomTip)
USER_NUMBER.addEventListener('input', userNumberVerification)
RESET_BTN.addEventListener('click', resetCalculator)
