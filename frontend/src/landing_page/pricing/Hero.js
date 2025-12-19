import React from 'react'

function Hero() {
    return (
        <div className='container p-5 mb-4'>

            <h1 className='mt-5 mb-1 text-center' style={{ opacity: "0.9", lineHeight: "1.5", fontSize: "2.2rem" }}>
                Charges
            </h1>
            <h3 className='text-center fs-4 text-muted' style={{ opacity: "0.7", marginTop: "0.5rem" }}>
                List of all charges and taxes
            </h3>
            <div className='row' style={{marginTop:"13rem"}}>
                <div className='col-4 text-center'>
                    <img src='media/images/pricing0.svg' alt='Charge 1' style={{height:"13rem"}} className='mb-4'/>
                    <h1 className='fs-2 pb-4'>Free equity delivery</h1>
                    <p className='fs-5 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 text-center'>
                    <img src='media/images/intradayTrades.svg' alt='Charge 1' style={{height:"13rem"}} className='mb-4'/>
                    <h1 className='fs-2 pb-4'>Intraday and F&O trades</h1>
                    <p className='fs-5 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                
                <div className='col-4 text-center'>
                    <img src='media/images/pricing0.svg' alt='Charge 1' style={{height:"13rem"}} className='mb-4'/>
                    <h1 className='fs-2 pb-4'>Free direct MF</h1>
                    <p className='fs-5 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
