
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WT from '../assets/wt.png';
import Logo2 from '../assets/logo1.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.png';

export default function Client() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <center>
    <div className="Container slider">
      <h2 style={{fontWeight:"600", color:"#585858"}} className="text-center mt-5 mb-5"> Our Client</h2>
      <div className="sliderContainer">
        <Slider {...settings}>
          <div>
            <img src={WT} alt="" />
          </div>
          <div>
            <img src={Logo2} alt="" />
          </div>
          <div>
            <img src={Logo3} alt="" />
          </div>
          <div>
            <img src={Logo4} alt="" />
          </div>
        </Slider>
      </div>
    </div>
    </center>
  );
}
