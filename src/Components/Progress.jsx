import './Progress.css';

export default function Progress({ totalRaised, targetAmount }) {
  const raisedPercent = totalRaised / targetAmount

  return (
    <section className="progress">
      <h2>Raised <span className="total-raised">${totalRaised}</span> of <span className="target-amount">${targetAmount}</span></h2>
      {/* progress bar */}
      {/* https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl */}
      {/* <div className="progress-bar">
        <div className="raised-percent" width={raisedPercent+"%"}></div>
      </div> */}
      {/* https://react.dev/reference/react-dom/components/progress */}
      <progress className="progress-component" value={raisedPercent} />
    </section>
  );
}
