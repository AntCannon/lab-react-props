import { useState } from 'react';

export default function DonationForm({ donationsList, updateDonations }) {
  const nextDonation = donationsList.length;

  const [formData, setFormData] = useState({
    name: "",
    caption: "",
    amount: "",
    id: nextDonation + 1
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the form data
    const data = formData;
    donationsList.unshift(data)

    // Submit the form data to your server

    console.log(`handleSubmit `, donationsList)
    updateDonations(donationsList)

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
            value={formData.name}
            onChange={handleChange} />
        </label>
        <label>Caption
          <input
            type="text"
            name="caption"
            className="input-caption"
            placeholder="Add a brief message"
            value={formData.caption}
            onChange={handleChange} />
        </label>
        <label>Amount
          <input
            type="number"
            name="amount"
            className="input-amount"
            placeholder="0"
            value={formData.amount}
            onChange={handleChange} />
        </label>
        <input type="submit" value="Donate!" />
      </form>
    </section>
  );
}
