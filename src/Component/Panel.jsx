import "./Panel.css";

const Panel = () => {
  return (
    <div className="panel">
      <div className="table">
        <h1 className="ready-to-elevate-container">
          <p className="ready-to-elevate-your-products">
            <span className="ready-to-elevate">{`Ready to elevate `}</span>
            <b className="your-products">your products</b>
            <span className="with">{` with `}</span>
            <b className="integrated-charging">integrated charging?</b>
          </p>
        </h1>
        <div className="column">
          <div className="cell">
            <button className="matrix-grid">
              <div className="matrix-grid-child" />
              <b className="explore-our-solutions">Explore Our Solutions</b>
            </button>
            <button className="matrix-grid1">
              <div className="matrix-grid-item" />
              <b className="partner-with-us">Partner With Us</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
