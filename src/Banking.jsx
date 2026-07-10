
import {useState} from 'react'


import AccountBalance from './banking_components/AccountBalance'
import Form from './banking_components/Form'

const Banking = () => {

    // The balance state has to be managed in the parent component (Banking)
    //  and passed down to the child component (AccountBalance) as a prop. 
    // This is because the balance is a piece of state that is shared between multiple components, 
    // and it needs to be updated in a centralized location.
    const [balance, setBalance] = useState(0) //we send a request to the server to get the balance and set it in the state.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Banking App</h1>
        </div>
      </div>
      {
        balance > 1000 ? <p className="text-success">You have a high balance!</p> :
         <p className="text-danger">You have a low balance!</p>

      }

      <AccountBalance balance={balance} />
      <Form balance= {balance} setBalance={setBalance} />
    </div>
  )
}

export default Banking
