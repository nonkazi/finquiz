import React from 'react';
import Navbar from './Navbar';
import './styles.css';

function ProfileCard({ title, description }) {
  return (
    <div className="profile-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="profile-section">
        <h2 className="profile-heading">My Profile</h2>
        <p className="profile-points">Points: 3450</p>

     
        <div className="profile-cards">
          <ProfileCard title="Change Points To Cash" description="Your Points Worth: R34.50" />
          <ProfileCard title="0.25% Home Loan " description="Get a 0.25% discount on your home purchase loan by redeeming 1500 points." />
          <ProfileCard title="Auto Insurance Discount" description="500 points for a 5% reduction in the next auto insurance premium." />
          <ProfileCard title="African Bank Clothing" description="20% Off On Neoprene Cooler Blue by redeeming 800 points " />
          <ProfileCard title="African Bank Clothing" description="5% Off Sublimated Sportie Green by redeeming 200 points " />
          <ProfileCard title="African Bank Clothing" description="10% Off Ladies Sublimated Scarves Green by redeeming 500 points" />
         
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
