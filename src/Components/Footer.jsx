import React from 'react';
import Phone from '../Assets/phone-solid.svg';
import Email from '../Assets/envelope-solid.svg';

export const Footer = () => {
  return (
    <div className=" mt-1 footer  text-bg-dark">
      <div className=" row">
        <div className="col-md-6 col-lg-4 col-12 py-5 ">
          <h5 className="stay fw-bold"><b>STAY IN TOUCH</b></h5>
          <div className="p-address  ">
            <p>Ek Bar,<br/>
            No 102 and 104,<br/>
            Kumaran Ratnam Road,<br/>
            Colombo 2,<br/>
            <b>Sri Lanka</b></p>
            <br /><br />
            <div className="mail-address fw-bold ">
              <a href="www.gon.com">ebinfo@ekbar.lk</a>
            </div>
            <p>Customer Service(9.00AM – 9.00PM)</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 col-12 py-5 ">
          <h5 className="product fw-bold">PRODUCT RANGE</h5>
          <ul>
            <li>
            <a href="catogories_wine.php">Wine</a>
            </li>
            <li>
            <a href="catogories_beer.php">Beer</a>
            </li>
            <li>
            <a href="catogories_alcohol.php">Alcohol</a>
            </li>
            <li>
            <a href="catogories_mixers.php">Mixers</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-2 col-12 py-5">
          <h5 className="about fw-bold">ABOUT US</h5>
          <ul>
            <li>
            <a href="aboutus.php">About us</a>
            </li>
          </ul>  
          <h5 className="about fw-bold pt-5">CONTACT US</h5>
          <div className=" justify-contect-start g-2">
          <img src={Phone} alt="phone icon " style={{width:"7%" , color:"white"}} />
          <p className='d-inline-block px-2' >+94 778294885</p>
          </div>
          
        </div>
        <div className="col-md-6 col-lg-3 col-12 py-5">
          <h5 className="place fw-bold">PLACE AN ORDER</h5>
          <ul>
            <li>
            <a href="#">Place an Order</a>
            </li>
            <li>
            <a href="rr.php">Returns and Refunds</a>
            </li>
            <li>
            <a href="#">Privacy Policy</a>
            </li>
            <li>
            <a href="tc.php">Terms and Conditions</a>
            </li>
          </ul>  
        </div>
      </div>
    </div>
  );
};
