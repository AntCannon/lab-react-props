import { useState } from 'react';

export default function DonationForm({ nextDonation }) {
  const [formData, setFormData] = useState({
    name: "",
    caption: "",
    amount: null,
    id: nextDonation.id
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the form data
    const data = new FormData(event.target);

    // Submit the form data to your server
    console.log(data)
  };
  
  return (
    <section className="donation" >
      <h3>You could be donation <span className="secondary">#{nextDonation+1}!</span></h3>
      <form className="donation-form" onSubmit={handleSubmit} >
        <label>Name
          <input type="text" className="input-name" name="name" placeholder="Your name" />
        </label>
        <label>Caption
          <input type="text" className="input-caption" name="caption" placeholder="Add a brief message" />
        </label>
        <label>Amount
          <input type="text" className="input-amount" name="amount" placeholder="0" />
        </label>
        <input type="submit" value="Donate!" />
      </form>
    </section>
  );
}
