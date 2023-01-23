class Deposit {
    constructor(amount, date) {
        this.amount = amount
        this.date = date
    }
    getDeposit() {

        if (!this.date) throw new Error('date must be provided')

        return {amount: this.amount, date: this.date.getDate()}
    }
}

module.exports = Deposit