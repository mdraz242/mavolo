import HeroImg from '../assets/heroImg.png'
export default function Hero() {
   const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <>
      <div className="container-fluid hero mt-2 pb-5 ">
        <div className="row">
            <div className="col-12 col-sm-7 col-md-7  left">
                <h2 className='display-2'>We <span>Design</span>, Develop and Manufacture Integrated Charging Solutions</h2>
                <button className='hero-btn' onClick={() => scrollToSection('form')}>Get In Touch</button>
            </div>
            <div className="col-12 col-sm-5 col-md-5 right">
                <img className='img-fluid d-flex mt-5' style={{width:"500px"}} src={HeroImg} alt="" />
            </div>
        </div>
      </div>
      
    </>
  )
}
