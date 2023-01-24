class Account {

    constructor() {
        this.balance = 0
        this.record = []
    }

    // add transaction - find type and ammend total accordingly

    addTransaction(transaction) {

        const incomingTransaction = transaction.getTransaction()

        const type = incomingTransaction.type
        const amount = incomingTransaction.amount

        if(type === 'credit') {
        this.balance += amount} 
        else if (type === 'debit') {
            this.balance -= amount
        }

        this.record = [...this.record, 
            {
                date: incomingTransaction.date,
                amount,
                type,
                balance: this.balance,
            }]
    }

    getRecord() {
        return this.record
    }

}

module.exports = Account