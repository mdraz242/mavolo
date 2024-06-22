/* eslint-disable react/prop-types */
const Card = (props) => {
    const { heading, content} = props;
  
    return (
      <div className="card mt-5">
        <div className="top">
          <h4>{heading}</h4>
        </div>
        <div className="main">
          <p style={{textAlign:"center"}} className="mt-3 text-left ">{content}</p>
        </div>
        <center>
        <div className="card-but">
        <button className=" text-dark"><a href="/about-us">Learn More</a></button>
       
      </div>
      </center></div>
    );
  };
  
  export default Card;
  