function TotalExpense({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="mt-auto pt-2 border-t border-[#582C4D]/10 text-center">
  <p className="text-sm text-gray-500 uppercase tracking-widest">Grand Total</p>
  <p className="text-2xl font-black text-[#6B3B54]">₹{total}</p>
</div>
  );
}

export default TotalExpense;