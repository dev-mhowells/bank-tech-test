const Transaction = require('../../transaction')
const Date = require('../../date')

jest.mock('../../date')

describe('Deposit', () => {

    beforeAll(() => {
        Date.mockImplementation(() => {
            return {
                getDate: () => {
                    return '01/01/2023'
                }
            }
        })
    })

    it('returns a deposit amount with a date', () => {

        const date = new Date('01/01/2024')

        const transaction = new Transaction('credit', 1000.00, date)

        expect(transaction.getTransaction()).toEqual({type: 'credit', amount: 1000.00, date:'01/01/2023'})
    })

    it('errors if no date has been provided', () => {

        const transaction = new Transaction('credit', 1000)

        expect(() => {transaction.getTransaction()}).toThrow('transaction must be initialized with: type, amount, date')
    })

    it('errors if no amount has been provided', () => {

        const date = new Date('01/01/2023')

        const transaction = new Transaction('credit', 0, date)

        expect(() => {transaction.getTransaction()}).toThrow('transaction must be initialized with: type, amount, date')
    })

    it('errors if type is not either credit or debit', () => {

        const date = new Date('01/01/2023')

        const transaction = new Transaction('c', 100, date)

        expect(() => {transaction.getTransaction()}).toThrow('type must be either "credit" or "debit"')


    })
})