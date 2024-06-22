import CoreCard from "./CoreCard";
export default function Core() {
  return (
    <>
      <div onClick={() => { window.location.href = '/core-values' }} style={{cursor:"pointer"}} id="core_value" className="container-fluid mt-5 core ">
        <h2 style={{fontWeight:"600", color:"#585858"}} className="text-center pt-4">Core Values</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 core-anim">
              <CoreCard title="Innovation" content="We're not just keeping up with change but leading it. We're constantly exploring new horizons, crafting solutions that redefine what's possible."></CoreCard>
            </div>
            <div className="col-12 col-sm-6 col-md-6 core-anim">
              <CoreCard title="Excellence" content="Excellence is our standard. Every product we make is a testament to our dedication to precision, performance, and perfection."></CoreCard>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 core-anim">
              <CoreCard title="Reliablity" content="You can count on us. At Mavolo, reliability is non-negotiable. Our products are built to last and engineered to deliver consistent performance day in and day out.
"></CoreCard>
            </div>
            <div className="col-12 col-sm-6 col-md-6 core-anim">
            <div className="main ">
              <div className="title2 core-anim">
                <h4 className="text-center text-light">Manufacturing in India
</h4>
              </div>
              <p className="text-center mt-5">
              By manufacturing locally, we're not just creating products; we're creating opportunities, supporting communities, and showcasing the craftsmanship and ingenuity of India.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
          </>
  );
}
