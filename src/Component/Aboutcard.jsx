/* eslint-disable react/prop-types */
const Aboutcard = (props) => {
    const { heading} = props;
  
    return (
      <div className="abtcard mt-5">
        <div className="top">
          <h4>{heading}</h4>
        </div>

       
      </div>
    );
  };
  
  export default Aboutcard;
  