class Transaction {

    constructor(type, amount, date) {
        this.type = type
        this.amount = amount
        this.date = date
    }

    // generic errors

    getTransaction() {

        if (!this.date) throw new Error('date must be provided')

        if (!this.amount) throw new Error('amount must be provided')

        return {amount: this.amount, date: this.date.getDate(), type: this.type}
    }
}

module.exports = Transaction