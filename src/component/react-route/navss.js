import React from "react"
import { Link } from "react-router-dom"

function Nv (){
    return(
        <nav>
            <ol>
               <Link to="/"><li>a1</li></Link>
                <Link to="/a2"><li>a2</li></Link>
               <Link to="/a3"><li>a3</li></Link> 
            </ol>
        </nav>
    )
}

export default Nv;