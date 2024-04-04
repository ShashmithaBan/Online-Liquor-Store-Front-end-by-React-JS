import React from 'react'
import HomeVid from '../Assets/video-home.mp4'

export const Home = () => {
  return (
    <div className="home mt-5 mb-0 justify-content-center">
    <section className="home-top" style={{ margin: "0", padding: "0" }}>
      <p className="lead justify-contect-center text-muted pt-2 pb-0 m-0" style ={{fontSize : "90%"}}>
As Sri Lanka's premier destination for premium wines and spirits, EkBar invites you to indulge in our exquisite collection.
      </p>
     <video src={HomeVid} autoPlay muted loop type='video/mp4' className='justify-content-center  pt-0' style={{width : "100%" , objectFit : "cover", height: "94vh",zIndex: "-10000"   }}/>
     <div className="text-wrapper justify-content-center position-absolute bottom-0 w-100 text-center shadow-sm" >
          <h2 className="text-white m-0 " style={{fontSize:"3vh" , lineHeight:"5px"}}>The perfect pour , The perfect fizz , The perfect clink </h2>
          <h1 className="text-white shadow-sm " style={{fontSize:"8vh"}}>For the Perfect Occassion</h1>
          <button type="button" className="btn btn-outline-light px-5 rounded-5"style={{fontSize:"5vh"}}>Explore More</button>
        </div>
    </section>
    </div>
    
  )
}
