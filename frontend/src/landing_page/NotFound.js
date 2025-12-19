import React from 'react'   
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row mb-3 mt-5' style={{marginLeft:"2rem", width:"40%"}}>
                <p className='mt-3 text-muted' style={{fontSize:"1.3rem", fontWeight:"500"}}>
                   404
                </p>
                <h1 className='mt-3 fs-2 mb-1' style={{opacity:"0.8"}}>Kiaan couldn’t find that page</h1>
                <p className='mt-3' style={{fontSize:"1.3rem"}}>
                   We couldn’t find the page you were looking for.<br></br>
                   <Link to="/" style={{ textDecoration: "none" }} className='linkColor'>
                   Visit Zerodha’s home page
                   </Link>
                </p>
            </div>
        </div>
     );
}

export default NotFound;