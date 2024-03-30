import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations.jsx";
import "./App.css";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <h2>Recent Donations</h2>
          {donations.map(donation => (
            <RecentDonations donation={donation} key={donation.id}/>
          ))}
        </section>
        <section className="">
          {/* Progress */}
          {/* Donation Form */}
        </section>
      </main>
    </>
  );
}

export default App;
