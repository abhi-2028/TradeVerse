import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <h1 className='text-center' style={{opacity:"0.9",fontSize:"2rem", fontWeight:"500", marginTop:"6rem"}}>
                Zerodha Products
                </h1>
            <h2 className='text-center fs-4' style={{fontWeight:"400", marginTop:"1rem", marginBottom:"2rem"}}>
                Sleek, modern, and intuitive trading platforms
            </h2>
            <p className='text-center fs-5' style={{marginBottom:"7rem"}}>
                Check out our <a href="/investment-offerings" className='linkColor'>investment offerings →</a> 
            </p>
            <hr style={{ marginTop: "8.5rem", opacity: "0.1" }} />
        </div>
     );
}

export default Hero;