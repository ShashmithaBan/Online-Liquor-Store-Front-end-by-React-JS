import React from 'react';

export const Footer = () => {
  return (
    <div className="footer container-md text-bg-dark">
      <div className="footer-item row row-cols-md-auto">
        <div className="col-div">
          <p className="stay"><b>STAY IN TOUCH</b></p>
          <div className="p-address">
            <p>Ek Bar</p>
            <p>No 102 and 104,</p>
            <p>Kumaran Ratnam Road,</p>
            <p>Colombo 2,</p>
            <p className="sri">Sri Lanka</p>
            <br /><br />
            <div className="mail-address">
              <a href="www.gon.com">ebinfo@ekbar.lk</a>
            </div>
            <p>Customer Service(9.00AM – 9.00PM)</p>
          </div>
        </div>
        <div className="col-div">
          <p className="product">PRODUCT RANGE</p>
          <a href="catogories_wine.php">Wine</a>
          <a href="catogories_beer.php">Beer</a>
          <a href="catogories_alcohol.php">Alcohol</a>
          <a href="catogories_mixers.php">Mixers</a>
        </div>
        <div className="col-div">
          <p className="about">ABOUT US</p>
          <a href="aboutus.php">About us</a>
          <a href="contactus.php">Contact us</a>
        </div>
        <div className="col-div">
          <p className="place">PLACE AN ORDER</p>
          <a href="#">Place an Order</a>
          <a href="rr.php">Returns and Refunds</a>
          <a href="#">Privacy Policy</a>
          <a href="tc.php">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};
