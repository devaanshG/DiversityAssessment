import "./Statistic.css";

// Create interface for the props, so we know the types of them,
interface StatisticProps {
  stat: Number;
  desc: String;
}

function Statistic({ stat, desc }: StatisticProps) {
  return (
    <>
      {/* The container for the stats, feeding in the data from the props */}
      <div className="stat-container">
        <h1>{stat}%</h1>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default Statistic;
