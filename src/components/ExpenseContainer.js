import ExpenseItem from "./ExpenseItem";

import "./ExpenseContainer.css";

const ExpenseContainer = ({expenses}) => {
  return (
    <div className="expenses">
      {expenses.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
};

export default ExpenseContainer;
