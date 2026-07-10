import blogpic from './assets/blogpic.jpg'



function Content() {
    let myStyles = {color:'yellow',backgroundColor:'purple',padding:'10px'}
    return <>
        <div className="col-md-6" p-4>
           <img src={blogpic} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-md-6" p-4>
           <h3 style={myStyles} className='mt-5'>Blog Section</h3>
           <p>This is the blog section content.</p>
           <button onClick={function() {alert("Read more about this page!");}} className="btn btn-dark" type="button">Read More</button>
        </div>
    </>
}

export default Content