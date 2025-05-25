import React, { useState } from "react";
import styled from "styled-components";

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 0;
  gap: 10px;

  & input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    outline: none;
    font-size: 14px;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin: 10px 0;

  & input[type="radio"] {
    margin-right: 5px;
  }
`;

const AddButton = styled.button`
  background-color: #0d1d2c;
  color: white;
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #142c43;
  }
`;

const AddTransaction = ({ addTransaction, onCancel }) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  const handleAdd = () => {
    if (!amount || !desc) {
      alert("Please enter amount and description");
      return;
    }
    addTransaction({
      id: Date.now(),
      amount: Number(amount),
      desc,
      type,
    });
    // Clear fields after adding
    setAmount("");
    setDesc("");
    setType("EXPENSE");
    if (onCancel) onCancel();
  };

  return (
    <AddTransactionContainer>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <label>
          <input
            type="radio"
            name="type"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={() => setType("EXPENSE")}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={() => setType("INCOME")}
          />
          Income
        </label>
      </RadioBox>
      <AddButton onClick={handleAdd}>Add Transaction</AddButton>
    </AddTransactionContainer>
  );
};

export default AddTransaction;
