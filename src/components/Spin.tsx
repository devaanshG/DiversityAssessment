import "./Spin.css";

interface SpinProps {
  heading: String;
  description: String;
}

function Spin({ heading, description }: SpinProps) {
  return (
    <>
      <div className="spin-card">
        <div className="spin-card-inner">
          <div className="spin-card-front">
            <h2>{heading}</h2>
          </div>
          <div className="spin-card-back">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spin;
