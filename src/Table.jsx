function Table() {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PMS</td>
            <td>$2.50</td>                                  
          </tr>
          <tr>
            <td>2</td>
            <td>Kerosene</td>
            <td>$3.00</td>                                      
          </tr>
          <tr>
            <td>3</td>
            <td>Diesel</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table