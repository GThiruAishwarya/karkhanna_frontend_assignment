import React, { useState } from "react";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";

const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, desc: "Salary", amount: 5000, type: "INCOME" },
    { id: 2, desc: "Groceries", amount: 200, type: "EXPENSE" },
  ]);

  const addTransaction = (txn) => {
    setTransactions((prev) => [txn, ...prev]);
  };

  const income = transactions
    .filter((t) => t.type === "INCOME")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "EXPENSE")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", padding: "0 10px" }}>
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <Overview income={income} expense={expense} addTransaction={addTransaction} />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default App;
