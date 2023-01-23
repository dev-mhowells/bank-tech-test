const Date = require('../date')

describe('Date', () => {

    it('returns the date', () => {

        const date = new Date('01.01.2023')
        expect(date.getDate()).toBe('01.01.2023')

    })

    it('errors if date is not a string', () => {

        const date = new Date(1012023)
        try {
            date.getDate()
        } catch (error) {
            expect(error.message).toBe('date must be formatted correctly')
        }
    })

})