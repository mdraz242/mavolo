import Card from "./Card";
import rushLogo from "../assets/rush_logo.png";


export default function About() {
  return (
    <>
    <div id="AboutSec" className="container-fluid about p-3 mt-5">
      <h2 style={{fontWeight:"600", color:"#585858"}} className="text-center mt-5">About Us</h2>
        <div className="row ">
            <div className="col-12 col-sm-4  mb-5 ">
                <Card  heading='Our Story' content='We saw a discomfort in the gadget charging space, where every device has..'></Card>
            </div>
            <div className="col-12 col-sm-4  mb-5">
                <Card heading='Our Mission' content='To help businesses grow with our innovations'></Card>
            </div>
            <div className="col-12 col-sm-4  mb-5">
                <Card heading='Our Vision' content='To be the beacon of technology, which drives humanity for a better tomorrow'></Card>
            </div>
        </div>
    </div>


    <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: '8px', background: '#fff', margin: '30px auto', width: '70%', alignItems: "center", paddingTop:"10px" , paddingBottom:"10px"  }} className="main_video_frame">
  <div className="VideoContainer">

    {/* <h1 className="video_heading"> <span style={{color:'red', fontStyle:"italic"}}>RUSH </span>Technology in Action</h1> */}
    <h1 style={{color:"#585858"}} className="video_heading"> <span> <img style={{ width: "160px" }} src={rushLogo} alt="Rush Logo" /> </span>Technology in Action</h1>
    
  </div>

  <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <iframe
        width="900"
        height="500"
        src="https://www.youtube.com/embed/XvbLdw2-sko?si=qq-rYf7HCL1z9cNp&controls=1&modestbranding=1&rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>



    </>
  )
}
