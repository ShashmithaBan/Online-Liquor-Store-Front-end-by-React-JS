import React from 'react'

export const Footer = () => {
  return (
   <div className="Footer">
    <div className="row py-5 px-5 justify-content-center">
        <div className="col-md-6 col-lg-4 col-12 ft-1  ">
            <h5 className='fw-bold '>STAY IN TOUCH</h5>
            <p>
            Ek Bar,<br/>
            No 102 and 104,<br/>
            Kumaran Ratnam Road,<br/>
            Colombo 2,<br/>
            <b>Sri Lanka</b> 
            </p>
            <a href="www.gon.com">ebinfo@ekbar.lk</a>
            <p>Customer Service(9.00AM – 9.00PM)</p>
        </div>
        <div className="col-md-6 col-lg-2 col-12 ft-2">
        <h5 className='fw-bold'>PRODUCT RANGE</h5>
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
        <div className="col-md-6 col-lg-2 col-12 ft-3">
        <h5 className='fw-bold'>ABOUT US</h5>
        <ul>
            <li>
            <a href="aboutus.php">About us</a>
            </li>
        </ul> 
        <h5 className="about fw-bold pt-2">CONTACT US</h5>
        
          <p className='d-inline-block '><i className="fa-solid fa-phone mx-1"></i>- +94 778294885</p>
        </div>
        <div className="col-md-6 col-lg-3 col-12 ft-4 ">
        <h5 className='fw-bold'>PLACE AN ORDER</h5>
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
   
  )
}
