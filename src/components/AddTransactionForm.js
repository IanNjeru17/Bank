import React, { useState } from "react";

function AddTransactionForm({ onSubmission }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
    
  });

  // handling what user is inputing
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
// dealing with submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmission) {
      onSubmission(formData);
      setFormData({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
      window.location.reload();
    }
  };
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
