import React from 'react'

function RightSection({
    imageURL,
    productName,
    productDesc,
    learnMore,
    linkName
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12 product_right_section_text">
                    <h1 className="pt-4">{productName}</h1>
                    <p>{productDesc}</p>
                    <div className="mb-4">
                        <a className="linkColor" href={learnMore} style={{ fontSize: "1.2rem"}}>{linkName} →</a>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12 d-flex justify-content-center">
                    <img src={imageURL} alt={productName} style={{ padding: "4.5rem 4rem 2rem 10rem", height: "auto" }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;