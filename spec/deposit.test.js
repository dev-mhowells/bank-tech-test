const Deposit = require('../deposit')
const Date = require('../date')

jest.mock('../date')

describe('Deposit', () => {

    beforeAll(() => {
        Date.mockImplementation(() => {
            return {
                getDate: () => {
                    return '01.01.2023'
                }
            }
        })
    })

    it('returns a deposit amount with a date', () => {

        const date = new Date('01.01.2023')

        const deposit = new Deposit(1000, date)

        expect(deposit.getDeposit()).toEqual({amount: 1000, date:'01.01.2023'})
    })

    it('errors if no date has been provided', () => {
        const deposit = new Deposit(1000)

        expect(() => {deposit.getDeposit()}).toThrow('date must be provided')
    })

    it('errors if no amount has been provided', () => {

        const date = new Date('01.01.2023')

        const deposit = new Deposit(0, date)

        expect(() => {deposit.getDeposit()}).toThrow('amount must be provided')
    })
})