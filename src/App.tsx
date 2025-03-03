import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/Expense.Filter";

// Define Expense type
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]); // Store an array of form data

  const [selectedCategory, setSelectedCategory] = useState("");
  // Function to handle form submission from the child component
  const handleFormSubmit = (data: {
    description: string;
    amount: number;
    category: string;
  }) => {
    // Generate a new expense object with a unique id
    const newExpense: Expense = { ...data, id: Date.now() }; // Use Date.now() to generate a unique id
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]); // Add new expense to the state
  };

  // Function to delete an expense by id
  const handleDelete = (id: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  // Function for filtering based on selected category
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <h3>Add an expense</h3>
      <div className="mb-5">
        <ExpenseForm onSubmit={handleFormSubmit} />
      </div>
      <h3>All expenses</h3>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
