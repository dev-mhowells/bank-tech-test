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
})