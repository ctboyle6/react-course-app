import React, { useState } from "react";

import "./ExpenseContainer.css";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseContainer;
