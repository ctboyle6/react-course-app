import './ExpenseForm.css';

const AddExpenseButton = (props) => {
  const buttonClickHandler = () => {
    props.onClickButton();
  }

  return (
    <div className="new-expense__actions-add">
      <button onClick={buttonClickHandler}>Add New Expense</button>
    </div>
  );
}

export default AddExpenseButton
