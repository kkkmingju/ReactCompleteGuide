import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) =>{

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, // ExpenseForm.js의 submitHandler에서 정의한 expenseData 모든 키:값 쌍을 가져옴
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
};

export default NewExpense
