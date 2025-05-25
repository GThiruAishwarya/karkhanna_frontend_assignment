import React, { useState, useEffect } from "react";

const Transactions = ({ transactions }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(transactions);

  useEffect(() => {
    if (!search.trim()) {
      setFiltered(transactions);
    } else {
      setFiltered(
        transactions.filter((t) =>
          t.desc.toLowerCase().includes(search.toLowerCase().trim())
        )
      );
    }
  }, [search, transactions]);

  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 6,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        maxHeight: 300,
        overflowY: "auto",
      }}
    >
      <h3>Transactions</h3>
      <input
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 8,
          width: "100%",
          marginBottom: 10,
          borderRadius: 4,
          border: "1px solid #ccc",
        }}
      />
      {filtered.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        filtered.map(({ id, desc, amount, type }) => (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
              borderBottom: "1px solid #eee",
              borderLeft: `5px solid ${type === "EXPENSE" ? "red" : "green"}`,
            }}
          >
            <span>{desc}</span>
            <span>${amount}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Transactions;
