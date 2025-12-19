import React from "react";
import { Link } from "react-router-dom";

function Universal() {
  return (
    <div className="container text-center">
      <h2
        className="fs-4"
        style={{ fontWeight: "400", marginBottom: "7rem", marginTop: "5rem" }}
      >
        Want to know more about our technology stack? Check out the
        <a className="linkColor" href="https://zerodha.tech">
          {" "}
          Zerodha.tech
        </a>{" "}
        blog.
      </h2>

      <h1 className="fs-3" style={{ fontWeight: "500" }}>
        The Zerodha Universe
      </h1>

      <p className="fs-5 mt-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row" style={{ padding: "0 4rem" }}>
        <div className="col-4 p-3 mt-5 text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            className="img-fluid mb-2"
            style={{ width: "15rem" }}
          />
          <p style={{width:"70%", margin:"1rem auto 0", fontSize:"0.9rem", opacity:"0.7"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            className="img-fluid mb-2"
            style={{ width: "15rem" }}
          />
          <p style={{width:"70%", margin:"1rem auto 0", fontSize:"0.9rem", opacity:"0.7"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img
            src="media/images/tijori.svg"
            alt=""
            className="img-fluid mb-2"
            style={{ width: "12rem" }}
          />
          <p style={{width:"70%", margin:"1rem auto 0", fontSize:"0.9rem", opacity:"0.7"}}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img
            src="media/images/streakLogo.png"
            alt=""
            className="img-fluid mb-2"
            style={{ width: "15rem" }}
          />
          <p style={{width:"70%", margin:"1rem auto 0", fontSize:"0.9rem", opacity:"0.7"}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            className="img-fluid mb-2"
            style={{ width: "15rem" }}
          />
          <p style={{width:"70%", margin:"1rem auto 0", fontSize:"0.9rem", opacity:"0.7"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            className="img-fluid mb-2"
            style={{ width: "12rem" }}
          />
          <p style={{width:"70%", margin:"1rem auto 0", fontSize:"0.9rem", opacity:"0.7"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <Link
        to="/universe"
        className="btn btn-primary btn-universe"
        style={{
          fontSize: "1.3rem",
          marginBottom: "5rem",
          marginTop: "3rem",
          display: "inline-block",
          padding: "0.6rem 2.5rem",
        }}
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default Universal;
