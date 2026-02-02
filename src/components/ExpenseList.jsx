import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="mt-4 text-gray-500 text-center">No expenses added yet</p>;
  }

  return (
    <ul className="w-full">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDeleteExpense}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
