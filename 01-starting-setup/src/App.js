import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 4),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 10),
  },
];

const App = () => {
  const [expenses, setExpense] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpenseReceived) => {
    // setExpense([newExpenseReceived, ...expenses]);
    setExpense((prevExpenses) => {
      console.log("prevExpenses:");
      console.log(prevExpenses);
      return [newExpenseReceived, ...prevExpenses];
    });
    console.log("expenses array inside:" + expenses);
  };
  console.log("expenses array outside:" + expenses);
  console.log(expenses);
  // const addExpenseHandler = (received) => {
  //   setExpense((prevState) => received, ...prevState);
  // };

  return (
    <div>
      <NewExpense
        // onAddExpense={addExpenseHandler}
        onSavedDataApp={addExpenseHandler}
      />
      <Expenses expensy={expenses} />
    </div>
  );
};

export default App;
