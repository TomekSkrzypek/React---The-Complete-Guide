import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const savedDataEF = (received) => {
    const dataSaved = {
      ...received,
      id: Math.random().toString(),
    };
    console.log(dataSaved);
    props.onSavedDataApp(dataSaved);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSavedDataEF={savedDataEF} />
    </div>
  );
};

export default NewExpense;
