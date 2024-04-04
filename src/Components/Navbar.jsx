import React, { useRef } from 'react';
import mainLogo from '../Assets/main_logo.png';
import cart from '../Assets/bag.svg';
import account from '../Assets/person-circle.svg'



export const Navbar = () => {
  const wineDropdownRef = useRef(null);
  const brandDropdownRef = useRef(null);
  const beerDropdownRef = useRef(null);
  const spiritDropdownRef = useRef(null);

  const openDropdown = (ref) => {
    if (ref.current) {
      ref.current.classList.add('show');
    }
  };

  const closeDropdown = (ref) => {
    if (ref.current) {
      ref.current.classList.remove('show');
    }
  };

  return (
    <nav className="navbar-expand-lg fixed-top">
      <div className="navbar bg-body-tertiary mx-5 my-1 rounded-1  px-3 py-1 fixed bg-opacity-75">
        <div className="nav-logo">
          <a><img src={mainLogo} alt="" className='img-fluid float-start' style={{ width: '50px' }} /></a>
        </div>
        <div className="collapse navbar-collapse justify-content-center  fw-light" id="navbarNav">
          <ul className="navbar-nav  "> 
         <a href='#' className='nav-item text-decoration-none mx-4 py-2 text-dark'><li>Home</li></a>
            <li
              className="nav-item dropdown mx-4"
              onMouseEnter={() => openDropdown(brandDropdownRef)}  
              onMouseLeave={() => closeDropdown(brandDropdownRef)} 
            >
              <a className="nav-link" href="#" role="button" aria-expanded="false">
                Brands
              </a>
              <ul className="dropdown-menu border-0 shadow-sm" ref={brandDropdownRef}>
                <li><a className="dropdown-item fw-lighter" href="#">Wines</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Beer & Mixers</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Spirits</a></li>
              </ul>
            </li>

            <li
              className="nav-item dropdown mx-4"
              onMouseEnter={() => openDropdown(wineDropdownRef)}  
              onMouseLeave={() => closeDropdown(wineDropdownRef)} 
            >
              <a className="nav-link" href="#" role="button" aria-expanded="false">
                Wines
              </a>
              <ul className="dropdown-menu border-0 shadow-sm" ref={wineDropdownRef}>
                <li><a className="dropdown-item fw-lighter" href="#">Red Wine</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">White Wine</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Another action</a></li>
              </ul>
            </li>

            <li
              className="nav-item dropdown mx-4"
              onMouseEnter={() => openDropdown(beerDropdownRef)}  
              onMouseLeave={() => closeDropdown(beerDropdownRef)} 
            >
              <a className="nav-link" href="#" role="button" aria-expanded="false">
                Beer & Mixers
              </a>
              <ul className="dropdown-menu border-0 shadow-sm" ref={beerDropdownRef}>
                <li><a className="dropdown-item fw-lighter" href="#">Beer</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Toddy</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Bitters</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Tonic</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Natural Tonic Water</a></li>
              </ul>
            </li>
            <li
              className="nav-item dropdown mx-4"
              onMouseEnter={() => openDropdown(spiritDropdownRef)}  
              onMouseLeave={() => closeDropdown(spiritDropdownRef)} 
            >
              <a className="nav-link" href="#" role="button" aria-expanded="false">
               Spirits
              </a>
              <ul className="dropdown-menu border-0 shadow-sm" ref={spiritDropdownRef}>
                <li><a className="dropdown-item fw-lighter" href="#">Beer</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Toddy</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Bitters</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Tonic</a></li>
                <li><a className="dropdown-item fw-lighter" href="#">Natural Tonic Water</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-btn">
        <a><img src={cart} alt="" className='img-fluid float-start mx-5' style={{ width: '20px' }} /></a>
        <a><img src={account} alt="" className='img-fluid float-start' style={{ width: '20px' }} /></a>
</div>

      </div>
    </nav>
  );
};
