class Statement {
    constructor(account) {
        this.account = account
    }
    print() {
        const record = this.account.getRecord()

        const headers = "date || credit || debit || balance"

        const formattedRecord = record.map((transaction) => {
            return `\n${transaction.date} || ${transaction.type === "credit" ? transaction.amount.toFixed(2) + ' ' : ''}|| ${transaction.type === "debit" ? transaction.amount.toFixed(2) + '' : ''}|| ${transaction.balance.toFixed(2)}`
        })

        return `${headers}${formattedRecord}`
    }
}

module.exports = Statement