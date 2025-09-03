import React from "react";

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const saving = income - expense;

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="card shadow-sm border-success">
          <div className="card-body text-center">
            <h5 className="text-success">Income</h5>
            <h3>₹{income}</h3>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-danger">
          <div className="card-body text-center">
            <h5 className="text-danger">Expense</h5>
            <h3>₹{expense}</h3>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-primary">
          <div className="card-body text-center">
            <h5 className="text-primary">Saving</h5>
            <h3>₹{saving}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
