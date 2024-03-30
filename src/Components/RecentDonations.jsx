import './RecentDonations.css';

export default function RecentDonations({donation}) {
  const { name, amount, caption, id } = donation;
  return (
    <div className="donation">
      <span className="name-amount">{name} donated ${amount}</span><br />
      <span>{caption}</span>
    </div>
  );
}
