import React from 'react'

function Pricing() {
    return (
        <div className='container mt-4'>
            <div className='row p-5 mb-4'>
                <div className='col-4'>
                    <h1 className='fs-2 mb-4'>Unbeatable pricing</h1>
                    <p className='text-muted mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{ textDecoration: "none",color:"#387ED1" }}>
                        See Pricing{" "}
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='col-8'>
                    <div className='row p-3 mb-3'>
                        <div className='col-4'>
                            <div className='row mt-4'>
                                <div className='col-6 text-center'>
                                    <img src='media/images/pricing0.svg' alt='Intraday Trades' style={{ width: "140px" }} />
                                </div>
                                <div className='col-6 text-bottom'>
                                    <p className='text-muted' style={{
                                        lineHeight: "1.4", fontSize: "12px",
                                        marginTop: "2.9rem", marginLeft: "-1.2rem"
                                    }}>Free account <br></br> opening</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='row mt-4'>
                                <div className='col-5 text-center'>
                                    <img src='media/images/pricing0.svg' alt='Intraday Trades' style={{ width: "140px" }} />
                                </div>
                                <div className='col-7 text-bottom'>
                                    <p className='text-muted ' style={{
                                        lineHeight: "1.4", fontSize: "12px",
                                        marginTop: "3.1rem", marginLeft: "0.2rem"
                                    }}>Free equity delivery <br></br>& direct mutual funds</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='row mt-4' style={{marginLeft:"10px"}}>
                                <div className='col-6 text-center'>
                                    <img src='media/images/intradayTrades.svg' alt='Intraday Trades' style={{ width: "140px" }} />
                                </div>
                                <div className='col-6 text-bottom'>
                                    <p className='text-muted' style={{
                                        lineHeight: "1.4", fontSize: "12px",
                                        marginTop: "2.7rem", marginLeft: "1.1rem"
                                    }}>Intraday and F&O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;