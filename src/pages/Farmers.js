
          import React, { useState } from "react";

function Farmers() {
  const [crop, setCrop] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [crops, setCrops] = useState([]);

  // Dummy buyers (later, replace with Firebase data)
  const buyers = [
    { name: "Ramesh Traders", bid: 1500, status: "Paid" },
    { name: "Lakshmi Agro", bid: 1400, status: "Pending" },
    { name: "Krishna Buyers", bid: 1550, status: "Paid" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCrop = { crop, quantity, price };
    setCrops([...crops, newCrop]);
    setCrop("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ color: "green" }}>👨‍🌾 Farmers Dashboard</h1>

      {/* Crop Form */}
      <div style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>Add Your Crop</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Crop Name"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            style={{ margin: "5px", padding: "8px" }}
          />
          <input
            type="number"
            placeholder="Quantity (kg)"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ margin: "5px", padding: "8px" }}
          />
          <input
            type="number"
            placeholder="Base Price (₹)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ margin: "5px", padding: "8px" }}
          />
          <button type="submit" style={{ margin: "5px", padding: "8px 15px", background: "green", color: "white", border: "none", borderRadius: "5px" }}>
            ➕ Add Crop
          </button>
        </form>
      </div>

      {/* Farmer's Crops */}
      <div style={{ marginBottom: "20px" }}>
        <h2>🌾 Your Crops</h2>
        {crops.length === 0 ? (
          <p>No crops added yet.</p>
        ) : (
          <ul>
            {crops.map((c, i) => (
              <li key={i}>
                {c.crop} - {c.quantity} kg - Base ₹{c.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Buyers & Bids */}
      <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>🛒 Buyers & Bids</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Buyer</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Bid (₹)</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((b, i) => (
              <tr key={i}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{b.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>₹{b.bid}</td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    color: b.status === "Paid" ? "green" : "orange",
                  }}
                >
                  {b.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Farmers;

