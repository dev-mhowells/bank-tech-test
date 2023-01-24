const Date = require('../../date.js')
const Transaction = require('../../transaction.js')
const Account = require('../../account.js')
const Statement = require('../../statement.js')

describe('statement', () => {
    it('prints a statement after making a deposit', () => {

        const date = new Date('10/01/2023')
        const deposit = new Transaction('credit', 1000.00, date)

        const date2 = new Date('11/01/2023')
        const deposit2 = new Transaction ('credit', 4000, date2)

        const account = new Account()
        account.addDeposit(deposit)
        account.addDeposit(deposit2)

        const statement = new Statement(account)
        
        expect(statement.print()).toBe(
            'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00\n11/01/2023 || 4000.00 || || 5000.00')
    })

    it('prints a statement after making a deposit and withdrawal', () => {

        const date = new Date('10/01/2023')
        const deposit = new Transaction(1000.00, date)

        const date2 = new Date('11/01/2023')
        const withdrawal = new Withdrawal(500, date)

    })
})