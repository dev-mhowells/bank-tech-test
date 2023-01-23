class Date {

    constructor(date) {
        this.date = date
    }

    getDate() {

        if (typeof this.date === 'string') {

            const splitDate = this.date.split('/')

            if (splitDate.length === 3 
                && splitDate[0].length === 2
                && splitDate[1].length === 2
                && splitDate[2].length === 4) {
                    return this.date

                } else throw new Error('date must be formatted correctly')

        } else throw new Error('date must be a string')
    }
}

module.exports = Date