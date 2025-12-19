import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-body sticky-top" style={{height:"5rem", boxShadow:"0 1px 1px 0 rgba(153, 153, 153, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.05)"}}>
                <div className="container-fluid container" >
                    <Link className="navbar-brand" to="/">
                        <img src='media/images/logo.svg' style={{width:"9rem",height:"1.7rem", paddingBottom:"0.5rem", marginLeft:"1rem"}} alt="Logo"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{fontWeight:"500", fontSize:"1rem", opacity:"0.8"}}>
                            <li className="nav-item p-3">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item p-3">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item p-3">
                                <Link className="nav-link" to="/product">Products</Link>
                            </li>
                            <li className="nav-item p-3">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item p-3">
                                <Link className="nav-link" to="/support">Support</Link>
                            </li>
                            <li className="nav-item p-3">
                                <i className="fa-solid fa-bars fs-5" style={{paddingTop:"0.6rem"}}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;
