import React from 'react'   
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-3 mb-3'>Open a Zerodha account</h1>
                <p className='fs-5 mt-3'>
                   Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. 
                </p>
                <Link to="/signup">
                    <button className="p-2 btn fs-5 mb-5 mt-3" style={{width:"220px", margin:"0 auto", backgroundColor:"#387ED1", fontWeight:"500",color:"white"}}>Sign up for free</button>
                </Link>
            </div>
        </div>
     );
}

export default OpenAccount;