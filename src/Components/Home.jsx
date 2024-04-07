import React from 'react'
import HomeVid from '../Assets/video-home.mp4'
import SeLeft from '../Assets/Home-rum-collectio.png'
import BSicon from '../Assets/CULEMBORG-SWEET-RED-750ML-X-6-1.webp'

export const Home = () => {
  return (

    <div className="home mt-5 mb-0 justify-content-center">

    <section className="home-top" style={{ margin: "0", padding: "0" }}>
      <p className="lead text-center text-muted pt-2 pb-0 m-0" style ={{fontSize : "90%"}}>
As Sri Lanka's premier destination for premium wines and spirits, EkBar invites you to indulge in our exquisite collection.
      </p>
     <video src={HomeVid} autoPlay muted loop type='video/mp4' className='justify-content-center  pt-0' style={{width : "100%" , objectFit : "Fill", height: "99vh",zIndex: "-10000"   }}/>
     <div className="text-wrapper justify-content-center position-absolute bottom-0 w-100 text-center shadow-sm" >
          <h2 className="text-white m-0 " style={{fontSize:"3vh" , lineHeight:"5px"}}>The perfect pour , The perfect fizz , The perfect clink </h2>
          <h1 className="text-white shadow-sm " style={{fontSize:"8vh"}}>For the Perfect Occassion</h1>
          <a href='#'><button type="button" className="btn btn-outline-light px-5 rounded-5"style={{fontSize:"5vh"}}>Explore More</button></a>
        </div>
    </section>



    <section className="home-expolrer ">
        <div className=" d-flex justify-content-around align-items-center p-4 " style={{backgroundColor:"rgb(36, 36, 36)" , color:"white"}} >
            <div className="col-5  justify-content-center container">
                 <img src={SeLeft} alt="" style={{width:"85vh"}} className='py-3 image-fluid'/>
                 <div className="btn d-flex justify-content-center ">
                 <a href='#'><button type="button" className=" btn btn-light px-5 py-2 rounded-3 " style={{fontSize:"5vh"}}>Start Exploring</button></a>
                 </div>
            </div>

            <div className="col-5 container" style={{paddingTop:"3%"}}>
                <h1 style={{fontSize:"250%" , fontFamily:"Roboto"}}>
                     From Terroir to Tasting: Unveiling the Secrets of Fine Winemaking
                </h1>
                <p style={{fontFamily:"Roboto"}}> 
                    Step into our exclusive wine sanctuary, where the world of fine wines reveals its captivating beauty. I'm Sarah, your trusted guide on this enriching odyssey. Whether you're a seasoned connoisseur or a curious newcomer, wine here transcends being just a drink; it becomes an art form. Our virtual vineyard tours transport you to breathtaking landscapes and wine regions steeped in history. You'll intimately know the influence of "terroir," the interplay of soil, climate, and grape variety that shapes every sip. We'll unravel the art of wine tasting, allowing you to discern the subtlest of notes and enrich your conversations. And as we explore the stories behind each label, you'll sip not just wine but stories, becoming part of a rich narrative.</p>

                <p style={{fontFamily:"Roboto"}}>      But that's not all. We'll delve into the magic of food pairings, guiding you through the intricacies of matching flavors. Your wine journey begins here, where we raise a glass to new beginnings. With our curated content and interactive sessions, you'll embark on an extraordinary voyage that transcends wine—it's a journey of discovery, a celebration of life, and a toast to the finer things. So, together, let's explore the world of wine and savor the beauty it brings to our lives. Cheers! 🍷🌿    
                 </p>
  </div>
  

        </div>
    </section>

    <section className="best-selling my-4 ">
    <div className="bs-title">
        <h1 className="text-center">
            Best Selling
        </h1>
        <div className="d-flex">
        <div className=" d-flex flex-wrap justify-content-center  mx-5">
            <div className="col-4 p-1  "  style={{ flex: '0 0 33.33%', maxWidth: '33.33%' }}>
                <img src={BSicon} alt="" className="img-fluid border" style={{width:"35%"}} />
            </div>
            <div className="col-4  p-1"  style={{ flex: '0 0 33.33%', maxWidth: '33.33%' }}>
            <img src={BSicon} alt="" className="img-fluid border" style={{width:"35%"}} />
            </div>
            <div className="col-4 p-1" style={{ flex: '0 0 33.33%', maxWidth: '33.33%' }}>
            <img src={BSicon} alt="" className="img-fluid border" style={{width:"35%"}} />
            </div>
            <div className="col-4  p-1" style={{ flex: '0 0 33.33%', maxWidth: '33.33%' }}>
            <img src={BSicon} alt="" className="img-fluid border" style={{width:"35%"}} />
            </div>
            <div className="col-4 p-1" style={{ flex: '0 0 33.33%', maxWidth: '33.33%' }}></div>
            <div className="col-4  p-1" style={{ flex: '0 0 33.33%', maxWidth: '33.33%' }}></div>
        </div>
        </div>
        
    </div>
</section>

    
    </div>
    
    
  )
}
