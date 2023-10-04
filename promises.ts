import fsPromises from 'fs/promises'

const dataFile = 'debts.txt'

interface Debts {
  name: string
  amount: number
}

function appendDebt(debt: Debts): void {
  const debtOutput = `Debtor ${debt.name} owes PHP ${debt.amount}\n`
  fsPromises.appendFile(dataFile, debtOutput, 'utf8').then(() => {
    fsPromises.readFile(dataFile, 'utf8').then((data) => {
      console.log('Debt appended!')
      console.log(data)
    }).catch((err) => {
      if (err != null) {
        console.log(err)
      }
    })
  }).catch((err) => {
    if (err != null) {
      console.log(err)
    }
  })
}

const secondDebt: Debts = { name: 'Jed Matthew II', amount: 3000 }

appendDebt(secondDebt)
