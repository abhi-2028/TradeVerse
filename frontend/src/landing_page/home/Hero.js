import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5' style={{width:"80%", margin:"auto"}}/>

                <h1 className='mt-4 fs-2 mb-3' style={{opacity:"0.8"}}> Invest in everything </h1>
                <p className='fs-4 mb-4'>
                   Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. 
                </p>
                <Link to="/signup">
                    <button className="p-2 btn fs-5 mb-5 mt-3" style={{width:"220px", margin:"0 auto", backgroundColor:"#387ED1", fontWeight:"500",color:"white"}}>Sign up for free</button>
                </Link>
            </div>
        </div>
     );
}

export default Hero;