// import Group from "../assets/group-1.svg";
import UP1 from "../assets/UP1.png";
import Up2 from "../assets/Up2.png";
import Up3 from "../assets/Up3.png";
import Up4 from "../assets/Up4.png";
export default function Service() {
  return (
    <>
    <center>
      <div onClick={() => { window.location.href = '/service' }} style={{cursor:"pointer"}} id="service" className="container-fluid service p-4 ">
        <h2 style={{fontWeight:"600", color:"#585858"}} className="text-center">Services</h2>
        <div className="row">
            <div className="col-12 col-sm-4 col-md-4 card1 bor">
                <div className="img1 back">
                    <img src={Up4} alt="" />
                </div>
                <div className="row inner">
                    <div className="col-6 col-sm-6 mt-2">
                       <h2 className="text-center">ODM</h2>
                    </div>
                    <div className="col-6 col-sm-6">
                        <p className="text-center p-2">Orginal Design Manufacturer</p>
                    </div>
                </div>

            </div>
            <div className="col-12 col-sm-8 col-md-8 card2 bor">
            <div className="img2 back">
          <img className="img-fluid" src={Up2} alt=""/>
          <span>&gt;</span>
          <img className="img-fluid" src={Up3} alt="" />
          <span>&gt;</span>
          <img className="img-fluid" src={UP1} alt="" />
         </div>
         <div className="row mt-3">
              <div className="col-6 col-sm-6 col-md-6">
                <h2>OEM</h2>
              </div>
              <div className="col-6 col-sm-6 col-md-6">
                <p>Orginal Equipment Manufacture</p>
              </div>
            </div>
            </div>
        </div>
      </div>
      </center>
    </>
  );
}
