

const Content = ({count, fruits, products, updater}) => {
 function handle_decrease() {
    updater((currentCount) => currentCount - 1)
 }

 function increase() {
    updater((currentCount) => currentCount + 1)
 }
 
    return (

        <div>
            <p>Count: {count} </p>
            {/* Displaying the list of fruits passed as props through loop, map,find,filter etc */}
            <p>Available Fruits</p>
                <ul>
                {
                    fruits.map(function(fruit, index) {
                        return <li key={index}>{fruit}</li>;
                    })
                }
            </ul>
            <p>Available Products</p>
        
            <table className="table">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>

                {
                    products.map(function(pro){
                        return (
                            <tr key={pro.Id}>
                                <td>{pro.Id}</td>
                                <td>{pro.Name}</td>
                                <td>{pro.Price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

            </table>

            <button onClick={() => increase()}>Increase</button>
            <button onClick={() => handle_decrease()}>Decrease</button>

        </div>
    )
}
export default Content