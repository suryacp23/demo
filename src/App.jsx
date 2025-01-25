import React, { useState } from 'react';

const App = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = () => {
    if (amount === '' || isNaN(amount) || Number(amount) <= 0) {
      setMessage('Please enter a valid amount');
    } else {
      setMessage(`Payment of $${amount} was successful!`);
      setAmount('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Payment App</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handlePayment} style={{ padding: '10px', width: '100%' }}>
        Pay
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;