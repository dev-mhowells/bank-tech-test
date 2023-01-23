const Date = require('../date')

describe('Date', () => {

    it('returns the date', () => {

        const date = new Date('01/01/2023')
        expect(date.getDate()).toBe('01/01/2023')

    })

    it('errors if date is not a string', () => {

        const date = new Date(123)
 
        expect(() => {date.getDate()}).toThrow('date must be a string')
    })

    it('errors if string is not correct format', () => {

        const date = new Date('01.01.2023')

        expect(() => {date.getDate()}).toThrow('date must be formatted correctly')

    })

})