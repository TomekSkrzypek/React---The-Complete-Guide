import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Expenses->filterChangeHandler->selectedYear:" + selectedYear);
  };

  console.log("props.expensy.date.year");
  console.log(props.expensy[0].date.getFullYear().toString());

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredYear === "all"
          ? props.expensy.map((objectMy) => (
              <ExpenseItem
                key={objectMy.id}
                title={objectMy.title}
                amount={objectMy.amount}
                date={objectMy.date}
              />
            ))
          : props.expensy
              .filter(
                (exactExpense) =>
                  exactExpense.date.getFullYear().toString() === filteredYear
              )
              .map((filteredExpense) => (
                <ExpenseItem
                  key={filteredExpense.id}
                  title={filteredExpense.title}
                  amount={filteredExpense.amount}
                  date={filteredExpense.date}
                />
              ))}  
              
               <h1>-----</h1>


        {/* {props.expensy
          .filter(
            (exactExpense) =>
              exactExpense.date.getFullYear().toString() === filteredYear
          )
          .map((filteredExpense) => (
            <ExpenseItem
              key={filteredExpense.id}
              title={filteredExpense.title}
              amount={filteredExpense.amount}
              date={filteredExpense.date}
            />
          ))} */}



        {/* {props.expensy.map((objectMy) => (
          <ExpenseItem
            key={objectMy.id}
            title={objectMy.title}
            amount={objectMy.amount}
            date={objectMy.date}
          />
        ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
