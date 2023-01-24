
# Bank Tech Test

A test driven tech test example of a banking program


## Deployment

To deploy this project run

```bash
  npm install
```

## Running Tests

To run tests, run the following command

```bash
  jest
```

To see test coverage run

```bash
  jest --coverage
```

## Demo

```bash
        const date = new Date('10/01/2023')
        const deposit = new Transaction('credit', 1000.00, date)

        const date2 = new Date('11/01/2023')
        const withdrawal = new Transaction('debit', 500, date2)

        const account = new Account()
        account.addTransaction(deposit)
        account.addTransaction(withdrawal)

        const statement = new Statement(account)

        statement.print()

        // date || credit || debit || balance
        // 11/01/2023 || || 500.00 || 500.00
        // 10/01/2023 || 1000.00 || || 1000.00
```

