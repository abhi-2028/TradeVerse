import React from 'react'

function Team() {
    return ( 
        <div className='container'>
            <h1 className='text-center' style={{opacity:"0.9",fontSize:"1.9rem", fontWeight:"500"}}>People</h1>
            <div className='row' style={{padding:"3.6rem 5.5rem 1rem 6.7rem"}}>
                <div className='col-lg-5 col-sm-12 text-center'>
                    <img src="media/images/nithinKamath.jpg" alt="Team" style={{width:"76%", borderRadius:"100%",marginLeft:"0.5rem"}} className='center' />
                    <h3 style={{marginTop:"1.2rem", fontWeight:"400", fontSize:"1.3rem"}}>Nithin Kamath</h3>
                    <h5 style={{fontSize:"1rem",paddingTop:"0.8rem",fontWeight:"500",opacity:"0.7"}} >Founder & CEO</h5>
                </div>
                <div className= 'col-lg-7 col-sm-12'>
                    <p style={{fontSize:"1.2rem", paddingLeft:"0.4rem", lineHeight:"1.4", marginTop:"1.2rem", color:"#424242ff"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        <br></br><br></br>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        <br></br><br></br>
                       Playing basketball is his zen.
                       <br></br><br></br>
                       Connect on <a href='https://nithinkamath.me/' className='linkColor'>Homepage</a> / <a href='https://tradingqna.com/u/nithin/summary' className='linkColor'>TradingQnA</a> / <a href='https://x.com/Nithin0dha' className='linkColor'>Twitter</a>
                       </p>
                </div>
            </div>
        </div>
     );
}

export default Team;