import React from "react";

function Footer() {
    return (
        <footer className="border-top" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/logo.svg" alt="Not Zerodha logo" style={{ width: "50%", paddingBottom: "1rem" }} />
                        <p>
                            &copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.
                        </p>
                    </div>
                    <div className="col">
                        <p className="fs-5" style={{ fontWeight: "500" }}>Company</p>
                        <a href="/about" className="footer-nav-link">About</a>
                        <br />
                        <a href="/products" className="footer-nav-link">Products</a>
                        <br />
                        <a href="/pricing" className="footer-nav-link">Pricing</a>
                        <br />
                        <a href="/referral" className="footer-nav-link">Referral programme</a>
                        <br />
                        <a href="/careers" className="footer-nav-link">Careers</a>
                        <br />
                        <a href="/zerodha-tech" className="footer-nav-link">Zerodha.tech</a>
                        <br />
                        <a href="/press" className="footer-nav-link">Press & media</a>
                        <br />
                        <a href="/csr" className="footer-nav-link">Zerodha cares (CSR)</a>
                        <br />
                    </div>
                    <div className="col">
                        <p className="fs-5" style={{ fontWeight: "500" }}>Support</p>
                        <a href="/contact" className="footer-nav-link">Contact</a>
                        <br />
                        <a href="/support" className="footer-nav-link">Support portal</a>
                        <br />
                        <a href="/z-connect" className="footer-nav-link">Z-Connect blog</a>
                        <br />
                        <a href="/charges" className="footer-nav-link">List of charges</a>
                        <br />
                        <a href="/downloads" className="footer-nav-link">Downloads & resources</a>
                        <br />
                    </div>
                    <div className="col">
                        <p className="fs-5" style={{ fontWeight: "500" }}>Account</p>
                        <a href="/signup" className="footer-nav-link">Open an account</a>
                        <br />
                        <a href="/fund-transfer" className="footer-nav-link">Fund transfer</a>
                        <br />
                        <a href="/60-day-challenge" className="footer-nav-link">60 day challenge</a>
                        <br />
                    </div>
                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "11px" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                        INZ000031633 CDSL: Depository services through Zerodha Securities
                        Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                        through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                        no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                        complaints pertaining to securities broking please write to
                        complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed
                        by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES
                        portal. Mandatory details for filing complaints on SCORES: Name,
                        PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read
                        all the related documents carefully before investing.
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers. Receive
                        information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities
                        markets - once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear
                        Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the
                        IPO application form to authorize your bank to make payment in case
                        of allotment. In case of non allotment the funds will remain in your
                        bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone
                        claiming to be part of Zerodha and offering such services, please
                        create a ticket here.
                    </p>
                </div>
                <div className="collapse navbar-collapse d-flex flex-row justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex flex-row mb-2 mb-lg-0" style={{ fontWeight: "400", fontSize: "0.9rem", opacity: "0.6", marginTop: "-1rem" }}>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/nse">NSE</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/bse">BSE</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/mcx">MCX</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/terms">Terms & conditions</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/policies">Policies & procedures</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/privacy">Privacy Policy</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/disclosure">Disclosure</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/investor-attention">For investor's attention</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link" href="/investor-charter">Investor charter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;