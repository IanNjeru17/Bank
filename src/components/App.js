import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data); // Set filtered transactions initially
      })
      .catch(error => console.log(error));
  }, []);
  
  console.log(transactions);

  function handleUpdate(newTransaction) {
    console.log(newTransaction);
    
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(newTransaction => setTransactions(transactions => [...transactions, newTransaction]))
    .catch(error => console.log(error));
  }

  const handleSearch = (term) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };
 
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search onSearch={handleSearch} />
      <AccountContainer />
      <AddTransactionForm onSubmission={handleUpdate} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
