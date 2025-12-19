import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlayLink,
  appStoreLink,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-12 d-flex justify-content-center">
          <img src={imageURL} alt={productName} style={{padding:"4.5rem 10rem 2rem 4rem", height:"37rem"}}/>
        </div>
        <div className="col-lg-4 col-sm-12 product_left_section_text">
          <h1 className="pt-4">{productName}</h1>
          <p>{productDesc}</p>
          <div className="mb-4">
            <a className="linkColor" href={tryDemo} style={{fontSize:"1.2rem", marginRight:"3rem"}}>Try Demo →</a>
            <a className="linkColor" href={learnMore} style={{fontSize:"1.2rem"}}>Learn More →</a>
          </div>
          <div>
            <a href={googlePlayLink}><img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{width:"10rem" , marginRight:"1rem"}}/></a>
            <a href={appStoreLink}><img src="media/images/appstoreBadge.svg" alt="App Store" style={{width:"9.3rem"}}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
