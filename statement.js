class Statement {
    constructor(account) {
        this.account = account
    }
    print() {
        const record = this.account.getRecord()

        const headers = "date || credit || debit || balance"

        const formattedRecord = record.map((transaction) => {
            return `\n${transaction.date} || ${transaction.type === "credit" ? transaction.amount + ' ' : ''}|| ${transaction.type === "debit" ? transaction.amount + '' : ''}|| ${transaction.balance}`
        })

        console.log(`${headers}${formattedRecord}`)
        return `${headers}${formattedRecord}`
    }
}

module.exports = Statement