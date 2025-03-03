import React from "react";
import { useState } from "react";

// Define the type for the expense data
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[]; // Array of expenses passed as a prop
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  if (expenses.length > 0)
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                {
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                }
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>
              <strong>${total.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default ExpenseList;
