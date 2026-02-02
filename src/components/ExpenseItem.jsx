import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-3 hover:bg-white/40 rounded-xl transition-all duration-200 group">
  
  <span className="truncate font-medium text-[#582C4D]">
    {expense.title}
  </span>

  <span className="text-right tabular-nums font-bold text-[#6B3B54]">
    ₹{expense.amount}
  </span>

  <button 
    onClick={() => onDelete(expense.id)}
    className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
    title="Delete expense"
  >
    <FontAwesomeIcon icon={faTrash} className="text-sm" />
  </button>
</li>
  );
}

export default ExpenseItem;