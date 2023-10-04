import fs from 'fs'

const dataFile = 'debts.txt'

interface Debts {
  name: string
  amount: number
}

function appendDebt(debt: Debts, callback: (error?: Error) => void): void {
  const debtOutput = `Debtor ${debt.name} owes PHP ${debt.amount}\n`
  fs.appendFile(dataFile, debtOutput, 'utf8', (error) => {
    if (error != null) {
      callback(error)
    } else {
      console.log('Debt appended!')
      fs.readFile(dataFile, 'utf8', (error, data) => {
        if (error != null) {
          console.log(error)
        } else {
          console.log('Here are the contents:')
          console.log(data)
        }
      })
    }
  })
}

const firstDebt: Debts = { name: 'Jed Matthew I', amount: 1500 }

appendDebt(firstDebt, (error) => {
  if (error != null) {
    console.log(error)
  }
})
