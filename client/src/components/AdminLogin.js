import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin({ contract }) {
  const [adminAddress, setAdminAddress] = useState("");

  const handleLogin = async () => {
    try {
      const isAdmin = await contract.isAdmin(adminAddress);
      if (isAdmin) {
        console.log("Admin logged in successfully");
        // Perform further actions for admin login (e.g., navigate to admin dashboard)
      } else {
        alert("Invalid admin address");
      }
    } catch (error) {
      console.error("Error logging in as admin:", error);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Enter admin address"
        value={adminAddress}
        onChange={(e) => setAdminAddress(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
