/* eslint-disable react/no-unescaped-entities */
import ProductCard from '../Component/ProductCard'
import ProHero from '../assets/pro-hero.png'
import Product2 from '../assets/product-2.png'
import P4 from '../assets/p4.svg'
import P5 from '../assets/p5.svg'
import P6 from '../assets/p6.svg'
import P7 from '../assets/p7.svg'
import P8 from '../assets/p8.svg'
import P9 from '../assets/p9.svg'
import P10 from '../assets/p10.svg'
import P11 from '../assets/p11.svg'
import P12 from '../assets/p12.svg'
import P13 from '../assets/p13.svg'
import P14 from '../assets/p14.svg'
import P15 from '../assets/p15.svg'
import P16 from '../assets/Group 2.png'
import P17 from '../assets/Group.png'
import P18 from '../assets/Group3.png'
import P19 from '../assets/Group 4.png'
import ProductCard2 from '../Component/ProductCard2'
import Card2Img from '../assets/charging protocol.png'
import Device from '../assets/device.png'
import Footer from '../Component/Footer'
export default function Product() {
  return (
    <>
     <div className="container-fluid pro-hero mt-5">
      <div className="row">
        <div className="col-12 col-sm-7 col-md-7 left">
        <h1><span>Hero USB</span> <br /> of your brand</h1>
        <h2>22W USB charger socket</h2>
        <h3>All in one solution for all charging needs</h3>
        <p className="text-secondary mt-4">
        Rush is designed to seamlessly integrate into your lifestyle. Experience the powerful charging at your bedside and workspace. it's a solution that redefines convenience, efficiency, and safety in charging your devices.
        </p>
        </div>
        <div className="col-12 col-sm-5 col-md-5 right">
          <div className="img">
            <img src={ProHero} alt="Product2" />
          </div>
        </div>
      </div>
     </div>
     <div className="container mt-5">
      <img className='img-fluid' src={Product2} alt="" />
     </div>
     <div className="container-fluid mt-4 p-4">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6">
        <ProductCard img1={P4} img2={P5} img3={P6} title="Rush Technology" content='Designed to fit seamlessly into any standard electricity socket in your home'></ProductCard>
        </div>
        <div className="col-12 col-sm-6 col-md-6">
        <ProductCard img1={P7} img2={P8} img3={P9} title="Small yet Powerful" content='Designed to fit seamlessly into any standard electricity socket in your home'></ProductCard>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-sm-6 col-md-6">
        <ProductCard img1={P10} img2={P11} img3={P12} title="Not just a phone 
charger" content="From smartphones to smartwatches, headphones to tablets, it's your go-to power "></ProductCard>
        </div>
        <div className="col-12 col-sm-6 col-md-6">
        <ProductCard img1={P13} img2={P14} img3={P15} title="Relax & Charge" content='With Surge, Overheating, Overvaltage, and Short-Circuit Safeguards, Your Gadgets '></ProductCard>
        </div>
      </div>
     </div>
     <div className="container-fluid p-5 prodesc">
      <h2>Description</h2>
      <p className='text-secondary mt-4'>
      Imagine the convenience of having the luxury of charging at your bedside and office table. Rush 22W is an evolved modular USB Charger socket that sits into any standard electricity socket at your bedside and understands your device's needs, engaging in a digital handshake to ensure the most optimal charging. You can increase your productivity without having to worry about device safety, charging time, and cluttering wires. Rush 22W is a compact powerhouse designed to elevate your charging experience.

      </p>
      <h2 className='mt-5'>What is Rush?</h2>
      <p className='text-secondary mt-4'>
      It is an approach to charging that combines intelligence, efficiency, and safety. By encompassing advanced features like communication with devices, auto cutoff, and a comprehensive array of protective measures, Rush Technology is poised to transform the way we charge our devices, providing a hassle-free and secure charging experience that meets the demands of modern technology. Here's how Rush Technology stands out:

      </p>
     </div>
{/* =======================card section========== */}
<div className="container-fluid">
  <div className="row">
    <div className="col-12 col-sm-6 col-md-6">
      <ProductCard2 img={Card2Img} title='Charging Protocols' content="From smartphones to smartwatches, headphones to tablets, it's your go-to power "></ProductCard2>
    </div>
    <div className="col-12 col-sm-6 col-md-6">
    <ProductCard2 img={Device} title='Device Communication' content="From smartphones to smartwatches, headphones to tablets, it's your go-to power  "></ProductCard2>
    </div>
  </div>
  <div className="row mt-2">
    <div className="col-12 col-sm-6 col-md-6">
      <ProductCard2 img={P16} title='Auto Cut-off' content="From smartphones to smartwatches, headphones to tablets, it's your go-to power "></ProductCard2>
    </div>
    <div className="col-12 col-sm-6 col-md-6">
    <ProductCard2 img={P17} title='Ripple-Free Voltage' content="From smartphones to smartwatches, headphones to tablets, it's your go-to power   "></ProductCard2>
    </div>
  </div>
  <div className="row mt-2">
    <div className="col-12 col-sm-6 col-md-6">
      <ProductCard2 img={P18} title='Efficient Power Switching' content="From smartphones to smartwatches, headphones to tablets, it's your go-to power "></ProductCard2>
    </div>
    <div className="col-12 col-sm-6 col-md-6">
    <ProductCard2 img={P19} title='Comprehensive Protection' content="From smartphones to smartwatches, headphones to tablets, it's your go-to power   "></ProductCard2>
    </div>
  </div>



</div>

<Footer></Footer>
    </>
  )
}
