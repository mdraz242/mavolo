/* eslint-disable react/no-unescaped-entities */
import Usb from "../assets/usb.png";
import Usb2 from "../assets/usb2.png";
import table_product from '../assets/table.png'

export default function Product() {
  return (
    <>
    <div id="product_scroll" className="container-fluid product">
        <h2 style={{fontWeight:"600", color:"#585858"}} className="text-center">Products</h2>
        <div className="row">


            <div className="col-12 col-sm-6 col-md-6 Procard">
               <div className="content">
               <h3 className="text-light">HERO USB OF YOUR BRAND</h3>
                        <span className="bg-light p-1">Dual Port 22W</span>
                        <p className="text-light mt-3">India's First 22W Rapid Charging Socket</p>
                        <button><a href="/Product-1">Get In Touch</a></button>

               </div>
            <div className="img">
                <img src={Usb} alt="" />
            </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 Procard">
            <div className="content">
               <h3 className="text-light">DEFAULT USB OF YOUR BRAND</h3>
                        <span className="bg-light p-1">USB 10W/12W</span>
                        <p className="text-light mt-3">India’s Default Integrated Charger for Every Home</p>
                        <button><a href="/Product-Sec">Get In Touch</a></button>

               </div>

            <div  className="img">
                <img src={Usb2} alt="" />
            </div>
            </div>

            
        </div>


    </div>



    <div id="product_scroll"  className="container-fluid product pt-5">
      
        <div className="row">


            <div className="col-1 col-sm-1 col-md-1 Procard1">
               <div className="content">
               <h3 className="text-light">HERO USB OF YOUR BRAND</h3>
                        <span className="bg-light p-1">Dual Port 22W</span>
                        <p className="text-light mt-3">India's First 22W Rapid Charging Socket</p>
                        <button><a href="/table-product">Get In Touch</a></button>

               </div>
            <div className="img">
                <img src={table_product} alt="" />
            </div>
            </div>
            

            
        </div>


    </div>

    </>
  );
}
