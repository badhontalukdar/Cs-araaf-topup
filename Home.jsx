import React from "react";

const categories = ["TopUp", "Gaming", "Offers", "Electronics"];
const products = [
  { name: "PUBG UC Purchase", price: "$10", image: "https://via.placeholder.com/150" },
  { name: "Free Fire Diamonds", price: "$5", image: "https://via.placeholder.com/150" },
  { name: "Mobile Top-Up", price: "$3", image: "https://via.placeholder.com/150" },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem', backgroundColor: '#f5f9ff' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>☰</span>
        <h1 style={{ color: '#1e40af' }}>Cs Araaf TopUp</h1>
        <span>🛒</span>
      </header>

      <input type="text" placeholder="Search products..." style={{ width: '100%', margin: '1rem 0', padding: '0.5rem' }} />

      <div style={{ display: 'flex', overflowX: 'auto', marginBottom: '1rem' }}>
        {categories.map(cat => (
          <button key={cat} style={{ marginRight: '0.5rem', border: '1px solid #60a5fa', color: '#1e3a8a', padding: '0.5rem' }}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {products.map((product, i) => (
          <div key={i} style={{ border: '1px solid #ddd', borderRadius: '1rem', padding: '0.5rem' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '0.5rem' }} />
            <h2 style={{ color: '#1e3a8a' }}>{product.name}</h2>
            <p>{product.price}</p>
            <button style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%' }}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}