import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [type, setType] = useState("income");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason || !amount) return;
    addTransaction({ type, reason, amount: Number(amount) });
    setReason("");
    setAmount("");
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="mb-3">➕ Add Transaction</h4>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-3">
            <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Reason (Why spent / Income Source)"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
