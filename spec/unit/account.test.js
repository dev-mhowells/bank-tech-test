const Account = require('../../account')
const Deposit = require('../../deposit')

jest.mock('../../deposit')

describe('Account', () => {

    beforeAll(() => {
        Deposit.mockImplementation(() => {
            return {
                getDeposit: () => {
                    return {amount: 1000, date: '01/01/2023'}
                }
            }
        })
    })

    it('updates the account record with a deposit', () => {
        
        const deposit = new Deposit()

        const account = new Account()

        account.addDeposit(deposit)

        expect(account.getRecord()).toEqual([
            {
                date: '01/01/2023',
                amount: 1000,
                type: "credit",
                balance: 1000
            }])

    })

})