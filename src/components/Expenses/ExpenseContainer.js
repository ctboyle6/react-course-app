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

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === +selectedYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={selectedYearHandler}
        />
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default ExpenseContainer;
