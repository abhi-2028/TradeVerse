import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src="media/images/education.svg" />
                    <div className="text-center">
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h1 className="fs-2 mb-4">Free and open market education</h1>
                    <p className="text-muted mb-2 fs-5" style={{ lineHeight: "2" }}>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <Link to="" className="fs-5" style={{ textDecoration: "none", color:"#387ED1" }}>
                        Varsity{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                    <p className="text-muted mb-2 fs-5 mt-4" style={{ lineHeight: "2" }}>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <Link to="" className="fs-5" style={{ textDecoration: "none", color:"#387ED1" }}>
                        TradingQ&A{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Education;