import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpenseContainer.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const ExpenseContainer = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectedYearHandler = (selected) => {
    setSelectedYear(selected);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedYear
  );

  let expensesContent = <p>No expenses found</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={selectedYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default ExpenseContainer;
