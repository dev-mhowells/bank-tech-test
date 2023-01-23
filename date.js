class Date {

    constructor(date) {
        this.date = date
    }

    getDate() {

        if (typeof this.date === 'string') {

            return this.date
        } else {
            throw new Error('date must be formatted correctly')
        }
    }
}

module.exports = Date