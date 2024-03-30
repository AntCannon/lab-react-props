

export default function Progress({ totalRaised, targetAmount }) {

  return (
    <section className="progress">
      <h2>Raised <span className="total-raised">${totalRaised}</span> of <span className="target-amount">${targetAmount}</span></h2>
      <div className="progress-bar"></div>
    </section>
  );
}
