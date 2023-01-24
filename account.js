class Account {

    constructor() {
        this.balance = 0
        this.record = []
    }

    // add transaction - find type and ammend total accordingly

    addTransaction(transaction) {

        const incomingTransaction = transaction.getTransaction()

        if(incomingTransaction.type === 'credit') {
        this.balance += incomingTransaction.amount} 
        else if (incomingTransaction.type === 'debit') {
            this.balance -= incomingTransaction.amount
        }

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