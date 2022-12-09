import React from 'react'
import Item from "./ExpenseItem"
import {MdDelete} from "react-icons/md"
export default function ExpenseList({expenses}) {
    console.log(expenses)
  return (
    <>
    {expenses.map((expense)=>{
        return <Item key={expense.id} expense={expense} />
    })}
    {expenses.length > 0 && <button className="btn">Clear Expenses <MdDelete className="btn-icon" /></button>}
    
    </>
  )
}
