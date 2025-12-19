import React from 'react'

function Hero() {
    return (
        <div className='container p-5 mb-4'>
            <div className='row mt-5'>
                <h1 className='mt-3 fs-3 mb-1 text-center' style={{ opacity: "0.9", lineHeight: "1.5" }}>
                    We pioneered the discount broking model in India. <br></br>
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <hr style={{ marginTop: "7rem", opacity: "0.1" }} />

            <div className='row' style={{padding:"5.4rem 6.5rem 1rem 6.5rem"}}>
                <div className='col-lg-6 col-sm-12'>
                    <p style={{fontSize:"1.2rem", paddingRight:"1rem", lineHeight:"1.7"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        <br></br><br></br>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        <br></br><br></br>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className= 'col-lg-6 col-sm-12'>
                    <p style={{fontSize:"1.2rem", paddingLeft:"1rem", lineHeight:"1.7"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        <br></br><br></br>
                        <span style={{color:"#387ED1"}}>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        <br></br><br></br>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <span style={{color:"#387ED1"}}>blog</span> or see what the media is <span style={{color:"#387ED1"}}>saying about us</span> or learn more about our business and product <span style={{color:"#387ED1"}}>philosophies</span>.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;