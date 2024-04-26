import React from 'react'
import BSicon from '../../Assets/CULEMBORG-SWEET-RED-750ML-X-6-1.webp'
import "./Pcard.css"

export const Pcard = () => {
  return (
    
        <div className="p_card col-md-4 p-1  m-1" style={{ width: "28%" }} >
            <div className="d-flex justify-content-center align-items-center">
                 <img src={BSicon} alt="" className="img-fluid " style={{ width: "50%" }} />
            </div>
            <div className="text-center my-2">
                <p className='text-muted d-block' style={{ lineHeight: "20%" ,fontSize:"1.2vw" }}>Red Wine</p>
                 <h3 style={{fontSize:"2vw" , fontWeight:"bold"}}>ZONIN SASSEO PRIMI SALENTO IGT 750ML</h3>
                <h5 className='fw-bold' style={{ lineHeight: "80%", color:"rgb(0, 166, 255)" , fontSize:"1.4vw"}}>LKR 8,500.00</h5>
            </div>
      
            <div className="btn" style={{ width: "100%" }}>
                <button className="btn btn-outline-dark" style={{width:"100%", fontSize:'1.2vw'}}>View Product</button>
            </div>
        </div>

    
  )
}
