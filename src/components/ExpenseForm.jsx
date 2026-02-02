import { useState } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount || amount <= 0) return;

    const expense = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
    };

    onAddExpense(expense);

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg border-2 border-[#db83b2] bg-white 
            placeholder:text-gray-400 text-gray-700
            focus:outline-none focus:border-[#ca78a4] focus:ring-1 focus:ring-[#dc7aaf]
            transition-all shadow-sm"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg border-2 border-[#db83b2] bg-white 
            placeholder:text-gray-400 text-gray-700
            focus:outline-none focus:border-[#ca78a4] focus:ring-1 focus:ring-[#dc7aaf]
            transition-all shadow-sm"
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-1 bg-[#b97498] hover:bg-[#ca78a4] text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add</span>
      </button>
    </form>
  );
}

export default ExpenseForm;
