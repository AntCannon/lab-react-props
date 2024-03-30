import './Progress.css';

export default function Progress({ totalRaised, targetAmount }) {
  const raisedPercent = totalRaised / targetAmount
  console.log(raisedPercent)

  return (
    <section className="progress">
      <h2>Raised <span className="total-raised">${totalRaised}</span> of <span className="target-amount">${targetAmount}</span></h2>
      <div className="progress-bar">
        <div className="raised-percent" width={raisedPercent+"%"}></div>
        <progress value={raisedPercent} />
      </div>
    </section>
  );
}
