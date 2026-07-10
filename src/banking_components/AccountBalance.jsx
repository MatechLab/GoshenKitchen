



const AccountBalance = ({ balance }) => {
  return (
    <div className="row mt-3">
      <div className="col-md-12 text-center">
        <p className="fs-4">Balance: <strong> {balance} </strong></p>
      </div>
    </div>
  )
}

export default AccountBalance