const Date = require('../../date.js')
const Deposit = require('../../deposit.js')
const Account = require('../../account.js')
// const Statement = require('../statement.js')

describe('statement', () => {
    it('prints a statement after making a deposit', () => {

        const date = new Date('10/01/2023')

        const deposit = new Deposit(1000, date)

        const account = new Account()
        account.addDeposit(deposit.getDeposit())

        // const statement = new Statement(account)
        
        // expect(statement.print()).toBe(
        //     'date || credit || debit || balance \n 10/01/2023 || 1000.00 || || 1000.00')
    })
})