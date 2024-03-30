export default function DonationForm({ nextDonation }) {
  
  return (
    <section className="donation">
      <h3>You could be donation <span className="secondary">#{nextDonation+1}!</span></h3>
      <form className="donation-form">
        <label>Name
          <input type="text" className="input-name" placeHolder="Your name" />
        </label>
        <label>Caption
          <input type="text" className="input-caption" placeholder="Add a brief message" />
        </label>
        <label>Amount
          <input type="text" className="input-amount" placeholder="0" />
        </label>
        <input type="submit" value="Donate!" />
      </form>
    </section>
  );
}
