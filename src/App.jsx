import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import TotalExpense from "./components/TotalExpense.jsx";
import './style.css'

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const deleteExpenseHandler = (id) => {
  setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const sortedExpenses = [...expenses].sort(
  (a, b) => a.amount - b.amount
  );

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#A26769]">
      <div className="rounded-2xl w-140 h-104 border-2 border-[#582C4D] bg-[#ECE2D0] p-6 shadow-xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-4 bg-linear-to-r from-[#582C4D] to-[#8d4b70] bg-clip-text text-transparent tracking-tight">
          Expense Tracker
        </h1>

        <ExpenseForm onAddExpense={addExpenseHandler} />
        <div className="flex-1 w-full overflow-y-auto mt-4 pr-2 custom-scrollbar">
      <ExpenseList expenses={sortedExpenses} onDeleteExpense={deleteExpenseHandler}
      />
      </div>
      <TotalExpense expenses={expenses} />
    </div>
  </div>
  );
}

export default App;
