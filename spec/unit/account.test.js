const Account = require('../../account')
const Transaction = require('../../transaction')

jest.mock('../../transaction')

describe('Account', () => {

    // beforeAll(() => {
    //     Transaction.mockImplementation(() => {
    //         return {
    //             getTransaction: () => {
    //                 return {type: 'credit', amount: 1000.00, date: '01/01/2023'}
    //             }
    //         }
    //     })
    // })

    it('updates the account record with a deposit', () => {

        Transaction.mockImplementation(() => {
            return {
                getTransaction: () => {
                    return {type: 'credit', amount: 1000.00, date: '01/01/2023'}
                }
            }
        })
        
        const transaction = new Transaction()

        const account = new Account()

        account.addTransaction(transaction)
        account.addTransaction(transaction)

        expect(account.getRecord()).toEqual([
            {
                date: '01/01/2023',
                amount: 1000.00,
                type: "credit",
                balance: 1000
            },
            {
                date: '01/01/2023',
                amount: 1000.00,
                type: "credit",
                balance: 2000
            }])

    })

    it('updates the account record with a withdawal', () => {

        Transaction.mockImplementation(() => {
            return {
                getTransaction: () => {
                    return {type: 'debit', amount: 500.00, date: '01/01/2023'}
                }
            }
        })
        
        const transaction = new Transaction()

        const account = new Account()

        account.addTransaction(transaction)

        expect(account.getRecord()).toEqual([
            {
                date: '01/01/2023',
                amount: 500.00,
                type: "debit",
                balance: -500
            }])

    })

})