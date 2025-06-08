import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { fetchUserProfile } from "../utils/api";
import "../styles/ProfilePage.css";

function Profile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      fetchUserProfile().then(setProfile);
    }
  }, [user]);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Your Profile</h2>
        {profile ? (
          <>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <h3>Recent Orders</h3>
            {profile.orders.length ? (
              <ul>
                {profile.orders.map((order, index) => (
                  <li key={index}>
                    Order #{order.id} - {order.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recent orders.</p>
            )}
          </>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </motion.div>
  );
}

export default Profile;
