import React, { useState } from "react";

function TransactionList({ transactions }) {
  const [sortType, setSortType] = useState("");

  let sortedTransactions = [...transactions];

  if (sortType === "dateAsc") {
    sortedTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortType === "dateDesc") {
    sortedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortType === "amountAsc") {
    sortedTransactions.sort((a, b) => a.amount - b.amount);
  } else if (sortType === "amountDesc") {
    sortedTransactions.sort((a, b) => b.amount - a.amount);
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="mb-3">📊 Transaction Records</h4>
        <div className="mb-3">
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setSortType("dateAsc")}>
            Date ↑
          </button>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setSortType("dateDesc")}>
            Date ↓
          </button>
          <button className="btn btn-outline-success btn-sm me-2" onClick={() => setSortType("amountAsc")}>
            Amount ↑
          </button>
          <button className="btn btn-outline-success btn-sm" onClick={() => setSortType("amountDesc")}>
            Amount ↓
          </button>
        </div>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Type</th>
              <th>Reason</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((t) => (
              <tr key={t._id}>
                <td className={t.type === "income" ? "text-success" : "text-danger"}>
                  {t.type.toUpperCase()}
                </td>
                <td>{t.reason}</td>
                <td>₹{t.amount}</td>
                <td>{new Date(t.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionList;
