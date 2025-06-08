import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { fetchUsers } from "../../utils/api";
import "../../styles/ManageUsers.css";

function ManageUsers() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user && user.role === "admin") {
      fetchUsers().then(setUsers);
    }
  }, [user]);

  if (!user || user.role !== "admin") {
    return <p>Access denied. Admins only.</p>;
  }

  const handleToggleRole = (id, role) => {
    // Mocked role update
    setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
  };

  return (
    <motion.div
      className="manage-users"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Manage Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <select
                    value={u.role}
                    onChange={(e) => handleToggleRole(u.id, e.target.value)}
                    aria-label={`Update role for user ${u.username}`}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ManageUsers;
