import React from "react";
import { Link } from "react-router-dom";

const firstPage = () => {
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

export default firstPage;