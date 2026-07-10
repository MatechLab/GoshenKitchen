import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Content from './Content.jsx'
import Table from './Table.jsx'



function Layout() {
    const num = 5
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                  
                </div>
                   

            </div>
            <div className="row">
                <div className="col-12">
                    <Banner />
                </div>
                   

            </div>
            <div className="row">
              
                    <Content />
            </div>

            <div>
                
                <Table />    
            </div>        
        </div>
    )
}

export default Layout