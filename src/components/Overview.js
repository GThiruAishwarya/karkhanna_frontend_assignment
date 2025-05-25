import React, { useState } from "react";

const Overview = ({ income, expense, addTransaction }) => {
  const [showForm, setShowForm] = useState(false);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("EXPENSE");

  const handleAdd = () => {
    if (!desc || !amount) return alert("Please fill all fields");
    addTransaction({
      id: Date.now(),
      desc,
      amount: Number(amount),
      type,
    });
    setDesc("");
    setAmount("");
    setShowForm(false);
  };

  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 6,
        marginBottom: 20,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Balance: ${income - expense}</h3>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <strong>Income</strong>
          <p style={{ color: "green" }}>${income}</p>
        </div>
        <div>
          <strong>Expense</strong>
          <p style={{ color: "red" }}>${expense}</p>
        </div>
        <button onClick={() => setShowForm((s) => !s)} style={{ padding: "6px 12px" }}>
          {showForm ? "Cancel" : "Add"}
        </button>
      </div>

      {showForm && (
        <div style={{ marginTop: 10 }}>
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{ padding: 8, width: "100%", marginBottom: 10, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: 8, width: "100%", marginBottom: 10, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <div style={{ marginBottom: 10 }}>
            <label>
              <input
                type="radio"
                value="EXPENSE"
                checked={type === "EXPENSE"}
                onChange={(e) => setType(e.target.value)}
              />
              Expense
            </label>
            <label style={{ marginLeft: 10 }}>
              <input
                type="radio"
                value="INCOME"
                checked={type === "INCOME"}
                onChange={(e) => setType(e.target.value)}
              />
              Income
            </label>
          </div>
          <button onClick={handleAdd} style={{ padding: "8px 20px" }}>
            Add Transaction
          </button>
        </div>
      )}
    </div>
  );
};

export default Overview;
