import fsPromises from 'fs/promises'

const dataFile = 'debts.txt'

interface Debts {
  name: string
  amount: number
}

async function appendDebt(debt: Debts): Promise<void> {
  const debtOutput = `Debtor ${debt.name} owes PHP ${debt.amount}\n`
  await fsPromises.appendFile(dataFile, debtOutput, 'utf8')
}

async function displayDebts(): Promise<void> {
  try {
    const data = await fsPromises.readFile(dataFile, 'utf8')
    console.log('Debt appended!')
    console.log(data)
  } catch (error) {
    if (error != null) {
      console.log(error)
    }
  }
}

async function main(debt: Debts): Promise<void> {
  try {
    await appendDebt(debt)
    await displayDebts()
  } catch (error) {
    console.log(error)
  }
}

const thirdDebt: Debts = { name: 'Jed Matthew III', amount: 4500 }

main(thirdDebt).catch((error) => {
  if (error != null) {
    console.log(error)
  }
})
