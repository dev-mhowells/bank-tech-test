class Deposit {
    constructor(amount, date) {
        this.amount = amount
        this.date = date
    }
    getDeposit() {
        return {amount: this.amount, date: this.date.getDate()}
    }
}

module.exports = Deposit