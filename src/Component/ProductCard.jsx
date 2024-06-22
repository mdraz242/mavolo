
export default function ProductCard(props) {
  return (
    <>
    <center>
      <div className="productCard">
        <div className="top text-center ">
            <div className="row">
                <div className="col-4 col-sm-4 col-md-4">
                <div className="first pt-2">
                    <img src={props.img1} alt="" />
                </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 ">
                    <div className="mid bg-light">
                        <img src={props.img2} alt="" />
                    </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                <div className="last pt-2">
                    <img src={props.img3} alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="content text-center">
            <u><h1>{props.title}</h1></u>
            <p className='mt-4'>{props.content}</p>
        </div>
      </div>
      </center>
    </>
  )
}
