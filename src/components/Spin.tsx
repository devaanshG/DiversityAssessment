import "./Spin.css";

// Create interface for props, so we know the types
interface SpinProps {
  heading: String;
  description: String;
}

function Spin({ heading, description }: SpinProps) {
  return (
    <>
      {/* Create the infrastructure for the card, feeding in props where we need */}
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
