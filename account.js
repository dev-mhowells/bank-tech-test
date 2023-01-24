class Account {

    constructor() {
        this.balance = 0
        this.record = []
    }

    addTransaction(transaction) {

        const {amount, date, type} = transaction.getTransaction()

        if(type === 'credit') {
        this.balance += amount} 
        else if (type === 'debit') {
            this.balance -= amount
        }

        this.record = [{
                        date,
                        amount,
                        type,
                        balance: this.balance,
                        },
                        ...this.record, ]
    }

    getRecord() {
        return this.record
    }

}

module.exports = Account