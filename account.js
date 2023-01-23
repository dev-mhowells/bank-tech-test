class Account {
    constructor() {
        this.balance = 0
        this.record = []
    }
    addDeposit(deposit) {

        const incomingDeposit = deposit.getDeposit()

        this.balance += incomingDeposit.amount

        this.record = [...this.record, 
            {
                date: incomingDeposit.date,
                amount: incomingDeposit.amount,
                type: "credit",
                balance: this.balance,
            }]
    }
    getRecord() {
        return this.record
    }
}

module.exports = Account