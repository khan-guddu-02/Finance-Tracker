import React, { useEffect, useState } from "react";
import axios from "axios";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get("http://localhost:5000/api/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    const res = await axios.post(
      "http://localhost:5000/api/transactions",
      transaction
    );
    setTransactions([...transactions, res.data]);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Finance Tracker</h1>
      <Summary transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
