import Logo from '../assets/logo.png'
export default function Footer() {
  return (
    <>
      <div style={{background:"#CBFFED"}} className="container-fluid footer">
        <div className="row">
            <div className="col-6 col-sm-6 col-md-6">
                <img className='img-fluid' src={Logo} alt="" />
            </div>
            <div className="col-6 col-sm-6 col-md-6  m-auto">
              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
                <a href="https://twitter.com/MavoloOfficial">  <i class="fa-brands fa-square-x-twitter"></i></a>
                
     <a href="https://www.instagram.com/mavolo.in/"><i className="fab fa-instagram"></i></a>
      </div>
            </div>
        </div>
        <hr />
        <div className="row second">
            <div className="col-12 col-sm-6 col-md-6">
                <div className="add">
                <h3 className=" mt-3">Registered Addresse</h3>
                <p>
                    Block - C -275, First Floor,
                    Sector 10, Noida Gautam Buddha
                    Nagar, India 201301
                </p>
                </div>
                <p className='mt-3 text-dark'> For any queries or concerns, write to us at  <i className="fa-solid fa-envelope"><span><u> info@mavolo.in</u></span></i></p>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
                <div className="right">
                <i className="fa-solid fa-phone"></i>
                <p className='ms-3'>Mob- +91 - 8861587589, 8423831466, 9787093848</p>
                </div>
                <div className="right">
                <i className="fa-solid fa-tty"></i>
                <p className='ms-3'>Tel- 0120-4127037</p>
                </div>
            </div>
            <p className="text-center text-secondary"><i className="fa-solid fa-copyright"></i> 2024 Mavolo. All rights Reserved <br />
             </p>
        </div>
      </div>
    </> 
  )
}
