import { useState } from 'react';

export default function DonationForm({ donationsList, addDonation }) {
  const nextDonation = donationsList.length;

  const [donationForm, setDonationForm] = useState({
    name: "",
    caption: "",
    amount: "",
    id: nextDonation + 1
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDonationForm({ ...donationForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDonation(donationForm)
    setDonationForm({
      name: "",
      caption: "",
      amount: "",
      id: nextDonation + 1
    })

  };
  
  return (
    <section className="donation" >
      <h3>You could be donation <span className="secondary">#{nextDonation+1}!</span></h3>
      <form className="donation-form" onSubmit={handleSubmit} >
        <label>Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input-name"
            value={donationForm.name}
            onChange={handleChange} />
        </label>
        <label>Caption
          <input
            type="text"
            name="caption"
            className="input-caption"
            placeholder="Add a brief message"
            value={donationForm.caption}
            onChange={handleChange} />
        </label>
        <label>Amount
          <input
            type="number"
            name="amount"
            className="input-amount"
            placeholder="0"
            value={donationForm.amount}
            onChange={handleChange} />
        </label>
        <input type="submit" value="Donate!" />
      </form>
    </section>
  );
}
