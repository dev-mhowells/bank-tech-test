class Transaction {

    constructor(type, amount, date) {
        this.type = type
        this.amount = amount
        this.date = date
    }

    getTransaction() {

        if (!this.date) throw new Error('transaction must be initialized with: type, amount, date')

        if (!this.amount) throw new Error('transaction must be initialized with: type, amount, date')

        if(this.type === 'credit' || this.type === 'debit') {
            return {amount: this.amount, date: this.date.getDate(), type: this.type}
        } else throw new Error('type must be either "credit" or "debit"')

    }
}

module.exports = Transaction