/* eslint-disable react/no-unescaped-entities */
import Aboutcard from "../Component/Aboutcard";
import story from "../assets/austindistelwd1lrb9oeeounsplash-1@2x.png";
import Up19 from "../assets/vision.png";
import Uni from "../assets/Illustration.png"
import Footer from '../Component/Footer'
import ProductCard2 from "../Component/ProductCard2"
import IMG2 from '../assets/replay-logo-1@2x.png'
import Img1 from "../assets/wt.png"

export default function AboutUs() {
  return (
    <>
      <div className="container heading mt-5">
        <h1 className="text-center">
          Pioneers of{" "}
          <span>
            Integrated <br />
            Charging
          </span>
        </h1>
      </div>
      <center>
        {/* <div className="container ourStory">
          <Aboutcard heading="Our Story"></Aboutcard>
          <img src={story} alt="" />
          <p className="abtcontent">
            Charging stuff can be a real pain. Wires everywhere, never enough
            outlets, and who knows where that fast charger disappeared to!
            Everyday life was overrun with a frustrating tangle of chargers,
            power strips, and a constant struggle for outlets. As an engineer, I
            was determined to find a smarter solution. I envisioned a world
            where power was effortlessly integrated into our surroundings.
            That's how Mavolo was born. We're the pioneers of integrated
            charging, creating solutions that are intelligent, reliable, and
            designed to enhance your daily life.
          </p>
          <p className="Name">-Ankur Bansal</p>
        </div> */}
        <div className="container ourVision com">
          <Aboutcard heading="Our Vision"></Aboutcard>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <p>
                To be the beacon of technology, driving humanity for a better
                tomorrow.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <div className="img">
                <img src={Up19} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container ourMission com mt-5">
          <Aboutcard heading="Our Mission"></Aboutcard>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <div className="img">
                <img src={Uni} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <p>
              Empowering businesses with innovative charging solutions for enhanced user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="container our-Clientcom ">
          <div className="our-top">
          <Aboutcard heading="Our Client Say"></Aboutcard></div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
            <ProductCard2 img={Img1} title="We saw a discomfort in the gadget charging space, where every device has..."></ProductCard2>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
            <ProductCard2 img={IMG2} title="We saw a discomfort in the gadget charging space, where every device has..."></ProductCard2>
            </div>
          </div>
         
         
          
          
        </div>
      </center>
      <Footer></Footer>
    </>
  );
}
