import { useState } from 'react'

const Form = ({ balance, setBalance }) => {
  const [amount, setAmount] = useState('')

  function withdraw() {
    if (amount === '') {
      alert('Type your amount to withdraw')
      return
    }

    const amountToWithdraw = Number(amount)

    if (amountToWithdraw > balance) {
      alert('Insufficient balance')
      return
    }

    setBalance((currentBalance) => currentBalance - amountToWithdraw)
    setAmount('')
  }

  function deposit() {
    if (amount === '') {
      alert('Type your amount to deposit')
      return
    }

    const amountToDeposit = Number(amount)
    setBalance((currentBalance) => currentBalance + amountToDeposit)
    setAmount('')
  }

  return (
    <div className="row">
      <div className="col-md-8 py-4 offset-md-2">
        <div className="mb-2">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-2 d-grid gap-2">
          <button type="button" className="btn btn-primary" onClick={deposit}>
            Deposit
          </button>
          <button type="button" className="btn btn-danger" onClick={withdraw}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form