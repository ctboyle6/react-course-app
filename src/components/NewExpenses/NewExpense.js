import React, { useState } from "react";

import AddExpenseButton from "./AddExpenseButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showButton, setShowButton] = useState(true);

  const buttonToggleHandler = () => {
    setShowButton(prevState => !prevState);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      {showButton && <AddExpenseButton onClickButton={buttonToggleHandler} />}
      {!showButton && (
        <ExpenseForm onClickButton={buttonToggleHandler} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
