export default class TipCalculator {
    bill = 0
    numberPeople = 0
    tipPercentage = 0

    totalPerson = 0
    tipPerson = 0

    get getBill() {
        return this.bill
    }
    set setBill(newBill) {
        this.bill = newBill
    }

    get getNumberPeople() {
        return this.numberPeople
    }
    set setNumberPeople(newNumberPeople) {
        this.numberPeople = newNumberPeople
    }

    get getTipPercentage() {
        return this.tipPercentage
    }
    set setTipPercentage(newTipPercentage) {
        this.tipPercentage = newTipPercentage
    }

    get getTotalPerson() {
        return this.totalPerson
    }
    set setTotalPerson(newTotalPerson) {
        this.totalPerson = newTotalPerson
    }

    get getTipPerson() {
        return this.tipPerson
    }
    set setTipPerson(newTipPerson) {
        this.tipPerson = newTipPerson
    }

    calculateTotal() {
        this.totalPerson = this.bill / this.numberPeople
        this.tipPerson = this.totalPerson * this.tipPercentage
        this.totalPerson = this.totalPerson + this.tipPerson
    }

    reset() {
        this.bill = 0
        this.numberPeople = 0
        this.tipPercentage = 0
        this.totalPerson = 0
        this.tipPerson = 0
    }
}