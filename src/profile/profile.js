import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <div className="profile-title-wrapper">
          <h3 className="profile-title"><strong>ABOUT</strong> ME</h3>
          <div className="profile-title-underline" />
        </div>
        <div className="profile-text-container">
          <p className="profile-text">
            {`Full-stack web developer based in NYC.`}
          </p>
          <p className="profile-text">
            {`Explorer, Traveller, Lifetime Learner`}
          </p>
          <p className="profile-text">
            {`Intrigued by tech, sociology, economics, photography, design and better conversations`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
