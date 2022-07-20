import TipCalculator from './TipCalculator.mjs'

const tipCalculator = new TipCalculator()

tipCalculator.setBill = 142.55
tipCalculator.setNumberPeople = 5
tipCalculator.setTipPercentage = 0.15
tipCalculator.calculateTotal()
console.log(tipCalculator.getTipPerson.toFixed(2))
console.log(tipCalculator.getTotalPerson.toFixed(2))
