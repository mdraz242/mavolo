import ProHero from '../assets/table.png'
import card1 from '../assets/campaign-creators-gMsnXqILjp4-unsplash.png'
import card2 from '../assets/benjamin-child-GWe0dlVD9e0-unsplash.png'
import card3 from '../assets/toa-heftiba-QnUywvDdI1o-unsplash.png'
import card4 from '../assets/evangeline-shaw-ysbTWw4hrG4-unsplash.png'
import card5 from '../assets/wonderlane-b9-odQi5oDo-unsplash.png'
import card6 from '../assets/jacek-dylag-PMxT0XtQ--A-unsplash.png'
import Footer from '../Component/Footer'
import ProductCard2 from '../Component/ProductCard2'
import P16 from '../assets/Group 2.png'
import P17 from '../assets/Group.png'
import Device from '../assets/device.png'
import Card2Img from '../assets/charging protocol.png'
const cardData = [
  { src: card1, alt: "Corporate offices", title: "Corporate offices" },
  { src: card2, alt: "Coworking spaces", title: "Coworking spaces" },
  { src: card3, alt: "Cafe tables", title: "Cafe tables" },
  { src: card4, alt: "Conference rooms", title: "Conference rooms" },
  { src: card5, alt: "Educational institutions", title: "Educational institutions" },
  { src: card6, alt: "And anywhere else", title: "And anywhere else" },
];

export default function TableProduct() {
  return (
    <>
      <div className="container-fluid pro-hero mt-5">
        <div className="row">
          <div className="col-12 col-sm-7 col-md-7 left">
            <h1>
              <span>Mavolo</span> <br />
              Table Product
            </h1>
            <h2>22W USB charger socket</h2>
            <h3>All in one solution for all charging needs</h3>
            <p className="text-secondary mt-4">
              The Mavolo table product seamlessly integrates power and convenience into your workspace. Featuring a universal socket and next-generation Rush Technology USB ports, it delivers fast, safe charging for all your devices.
            </p>
          </div>
          <div className="col-12 col-sm-5 col-md-5 right">
            <div className="img">
              <img src={ProHero} alt="Product2" />
            </div>
          </div>
        </div>
      </div>
      <div className="container tableproduct">
        <div className="row ">
          {cardData.map((card, index) => (
            <div className="col-12 col-sm-6 col-md-6 rows" key={index}>
              <div className="back">
                <div className="img">
                  <img src={card.src} alt={card.alt} />
                </div>
                <h3 className='text-center text-light mt-5'>
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <h2>What is Rush?</h2>
        <p className='mt-4'>Rush Technology within the USB ports offers intelligent power delivery. It provides rapid charging, seamlessly switching power based on your device's needs. Eqquipped  with PPS (Programmable Power Supply), Rush ensures optimized charging for all devices while maintaining complete safety with fireproof construction.Rush is designed to streamline your workflow and keep you powered throughout the day.</p>
      </div>
{/* =======================card section========== */}
<div className="container-fluid">
  <div className="row">
    <div className="col-12 col-sm-6 col-md-6">
      <ProductCard2 img={Card2Img} title='Integrated Power Delivery' content="The Mavolo table product eliminates the need for bulky adapters and tangled wires."></ProductCard2>
    </div>
    <div className="col-12 col-sm-6 col-md-6">
    <ProductCard2 img={Device} title='Rush Technology' content="Experience the future of charging with Rush Technology. Our intelligent USB ports deliver unparalleled performance with "></ProductCard2>
    </div>
  </div>
  <div className="row mt-2">
    <div className="col-12 col-sm-6 col-md-6">
      <ProductCard2 img={P16} title='Seamless Integration' content="The Mavolo Rush is designed for effortless integration into tables, desktops, and workspaces. Its sleek and modern design complements any environment, promoting a clean and organized workspace "></ProductCard2>
    </div>
    <div className="col-12 col-sm-6 col-md-6">
    <ProductCard2 img={P17} title='OEM Customization' content="We understand the importance of brand identity. The Mavolo Rush is available for OEM customization, allowing manufacturers and corporate offices to integrate their branding for a cohesive look."></ProductCard2>
    </div>
  </div>

</div>

            <div className='container bottom-content'>

            <p>The Mavolo Table product is an investment in productivity. By providing convenient and reliable power access, it empowers users to focus on what matters most – their work. Ideal for:</p>
    <ul>
        <li>Corporate offices</li>
        <li>Coworking spaces</li>
        <li>Cafe tables</li>
        <li>Conference rooms</li>
        <li>Educational institutions</li>
        <li>And anywhere else where convenient charging is needed</li>
    </ul>
    <p>The Mavolo Table product is the perfect solution for businesses and manufacturers seeking to elevate their workspace offerings. Contact Mavolo today to discuss integrating Rush Technology into your tables and workspaces, and experience the future of convenient and reliable power delivery.</p>
            
            </div>



      <Footer></Footer>
    </>
  )
}
