import React, { useState } from "react";

import ExpensesList from "./ExpensesList";

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={selectedYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseContainer;
