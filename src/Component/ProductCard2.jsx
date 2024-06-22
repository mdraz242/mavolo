
export default function ProductCard2(props) {
  return (
    <>
    <center>
      <div className="card2">
        <div className="circle">
            <img src={props.img} alt="" />
        </div>
        <div className="content">
            <h3>{props.title}</h3>
            <p className='text-secondary'>{props.content}</p>
        </div>
      </div>
      </center>
    </>
  )
}
