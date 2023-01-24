class Account {

    constructor() {
        this.balance = 0
        this.record = []
    }

    addDeposit(transaction) {

        const incomingTransaction = transaction.getTransaction()

        this.balance += incomingTransaction.amount

        this.record = [...this.record, 
            {
                date: incomingTransaction.date,
                amount: incomingTransaction.amount,
                type: incomingTransaction.type,
                balance: this.balance,
            }]
    }

    getRecord() {
        return this.record
    }

}

module.exports = Account