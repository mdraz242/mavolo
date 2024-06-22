
export default function CoreCard(props) {
    return (
      <>
              <div className="main">
                <div className="title">
                  <h4 className="text-center text-light">{props.title}</h4>
                </div>
                <p className="text-center mt-5">
                  {props.content}
                </p>
              </div>
            
      </>
    )
  }
  