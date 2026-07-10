
import xyz from "./hello.module.css"; //how to import a module.css


const Hello = () => {
    return (
<div>
    {/* how to use a module css classname */}
        <h1 className={'text-end' + xyz.heda}>Hello World from Hi</h1>

</div>

    )
}

export default Hello