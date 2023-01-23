const Date = require('../date')

describe('Date', () => {
    it('returns the date', () => {
        const date = new Date('01.01.2023')
        expect(date.getDate()).toBe('01.01.2023')
    })
})