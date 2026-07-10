import img1 from './assets/img1.jpg'
import Header from './Playground_components/Header'
import Content from './Playground_components/Content'
import Footer from './Playground_components/Footer'
import { useState } from 'react'


const Playground = () => {
// we sent a request to an aoi and got a response and we stored the response in a variable called appname   

    var appname = "Blogger App";
    const [count, setCount] = useState(0); 
    // count is the container that will hold the value of count and setCount is the function that will change the value of count    
    // var count = 0; because count will be a chaning value
    var fruits = ["apple","banana","mango","grapes"];
    var products = [
        {
            Id:1,
            Name: "Apple Cider Vinegar",
            price: 1000
        },
        {
            Id:2,
            Name: "Yellow Garri",
            price: 500

        },
        {
            Id:3,
            Name: "White Garri",
            price: 600
        }
    ];
        function sayHello() {
            alert("Hello, My John");
        };

        return (
            <div>

                    <Header xyz={appname} abc={count} />
                    <Content count={count} fruits={fruits} products={products} updater={setCount} />
                    <Footer />




        {/* how to display image in public folder in react js */}
        <img src="/assets/img/img1.jpg" alt="dream car" className="img-fluid" />

        {/* how to display image in src folder in react js */}
        <img src={img1} alt="dream car" className="img-fluid" />    

        



    </div>
  );
}
export default Playground;