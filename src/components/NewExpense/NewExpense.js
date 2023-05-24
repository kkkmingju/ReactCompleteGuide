import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // ExpenseForm.js의 submitHandler에서 정의한 expenseData 모든 키:값 쌍을 가져옴
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  // let test = <div>test</div>;

  const startEdittingHandler = (event) => {
    console.log(event);
    event.target.hidden = true;
    setIsEditing(true);
    // const appendForm = (
    //   <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    // );
  };

  const stopEdittingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEdittingHandler}>New Add Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
