import './Statistic.css';

interface StatisticProps {
    stat: Number;
    desc: String;
}

function Statistic({stat, desc}:StatisticProps) {
    return <>
    <div className='stat-container'>
        <h1>{stat}%</h1>
        <p>{desc}</p>
    </div>
    </>
} 

export default Statistic;