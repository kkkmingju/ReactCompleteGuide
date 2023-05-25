import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // // state객체 하나로 한개의 state처럼 관리할 수 있다.
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     ensteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // 브라우저가 기본으로 제공하는 이벤트객체 사용
    var tvalue = event.target.value;
    setEnteredTitle(tvalue);

    // // 동시에 많은 상태 업데이트 시
    // // 방법 1.
    //     setUserInput({
    //         ...userInput, // 객체를 취해서 모든 키 값의 쌍을 추출해서 새로운 객체에 추가(오버라이드)
    //         enteredTitle: tvalue,
    //     })

    // // 방법 2. 최신 상태의 스냅샷에서 작업하도록 함. 방법 1보다 안전.
    //     setUserInput((prevState) => { // 호출하고있는 업데이트 함수의 state 스냅샷을 받음 (항상 최신 상태의 스냅샷임)
    //         return { ...prevState, enteredTitle: tvalue } // 새로운 state의 스냅샷 반환

    //     });
  };
  const amountChangeHandler = (event) => {
    var avalue = event.target.value;
    setEnteredAmount(avalue);

    // setUserInput({
    //     ...userInput, //객체를 취해서 모든 키 값의 쌍을 추출해서 새로운 객체에 추가(오버라이드)
    //     enteredAmount: avalue,
    // })

    // setUserInput((prevState) => { // 호출하고있는 업데이트 함수의 state 스냅샷을 받음 (항상 최신 상태의 스냅샷임)
    //     return { ...prevState, enteredAmount: avalue } // 새로운 state의 스냅샷 반환

    // });
  };

  const dateChangeHandler = (event) => {
    var dvalue = event.target.value;
    setEnteredDate(dvalue);

    // setUserInput({
    //     ...userInput, //객체를 취해서 모든 키 값의 쌍을 추출해서 새로운 객체에 추가(오버라이드)
    //     enteredDate: dvalue,
    // })

    // setUserInput((prevState) => { // 호출하고있는 업데이트 함수의 state 스냅샷을 받음 (항상 최신 상태의 스냅샷임)
    //     return { ...prevState, enteredDate: dvalue } // 새로운 state의 스냅샷 반환

    // });
  };

  const submitHandler = (event) => {
    // 브라우저는 폼이 제출될 때마다 웹페이지를 호스팅하고 있는 서버에 요청을 보냄
    event.preventDefault(); // 내장 자바스크립트. 기본 요청이 보내지는 것을 막아 페이지 로드하지 않음.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate), // 내장 날짜 생성자.
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    //버튼 클릭 시 빈칸으로 만들어줌
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-05-22"
            max="2023-05-23"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
