import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  console.log({ ...props });
  console.log(
    `Data recived via props:
  title: ${props.title}
  date: ${props.date}
  price: ${props.amount}`
  );

  const [title, setTitle] = useState(props.title);
  const [amount, changeAmount] = useState(props.amount);


  const handleClick = () => {
    setTitle('alalalal updated')
    console.log("handleClick Fired & button clicked");
  };

  const handle2Click = () => {
    changeAmount(amount*2)
  }

  const handle3Click = () => {
    changeAmount(amount/3)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>chaange2 title</button>
      <button onClick={handle2Click}>x2</button>
      <button onClick={handle3Click}>/3</button>
    </Card>
  );
};

export default ExpenseItem;
