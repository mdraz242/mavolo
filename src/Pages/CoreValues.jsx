import Footer from '../Component/Footer'
import Core1 from '../assets/core1.png'
import Core2 from '../assets/core2.png'
import Core3 from '../assets/core3.png'
import Core4 from '../assets/core4.png'
export default function CoreValues() {
  return (
    <>
      <h1 className="text-center core-title m-5 core-first">Core Values</h1>
      <div className="container core-con ">
      <div className="top">
          <h4>Innovation</h4>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-9 col-md-9">
            <p className='text-secondary pt-3'>We're not just keeping up with change but leading it. We're constantly exploring new horizons, crafting solutions that redefine what's possible.
</p>
          </div>
          <div className="col-12 col-sm-3 col-md-3">
            <div className="img ">
              <img src={Core1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container core-con mt-5 sec">
      <div className="top">
          <h4>Excellence</h4>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-3 col-md-3">
            <div className="img">
              <img className='img-fluid ms-5' src={Core2} alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-9">
            <p className='text-secondary pt-3'>Excellence is our standard. Every product we make is a testament to our dedication to precision, performance, and perfection.
</p>
          </div>
        </div>
      </div>
      <div className="container core-con mt-5">
      <div className="top">
          <h4>Reliablity</h4>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-9 col-md-9">
            <p className='text-secondary pt-3'>You can count on us. At Mavolo, reliability is non-negotiable. Our products are built to last and engineered to deliver consistent performance day in and day out.

</p>
          </div>
          <div className="col-12 col-sm-3 col-md-3">
            <div className="img">
              <img src={Core3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container core-con mt-5 sec">
      <div className="top">
          <h4>Manufacturing in India
</h4>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-3 col-md-3">
            <div className="img">
              <img className ="img-fluid ms-5" src={Core4} alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-9">
            <p className='text-secondary pt-3'>By manufacturing locally, we're not just creating products; we're creating opportunities, supporting communities, and showcasing the craftsmanship and ingenuity of India.
</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
