import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {

    useEffect(()=>{
       
        fetch('https://api.npms.io/v2/search?q=react')
        .then(res=>res.json())
        .then(data=> console.log(data.results));
   
    },[])

    return(
        <div>
            <h1>
                This is my first page
            </h1>
            <li>
                    <Link to="/secondPage">
                        Redirect to Second Page
                    </Link>
                </li>
        </div>
    )
}

export default FirstPage;