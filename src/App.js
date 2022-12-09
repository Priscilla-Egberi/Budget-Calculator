import {useState} from "react"
import './App.css';
import Alert from "./components/Alert"
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList"

const initialExpenses = [
  {id:0, charge:"payment for bills", amount:1200},
  {id:1, charge:"School equipments", amount:2000},
  {id:2, charge:"purchasement of laptop", amount:12000}
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList />
      </main>
      <h1>total spending:{" "}
      <span className="total">$
      {expenses.reduce((acc, curr)=>{
        return acc +=curr.amount
      },0)}
      </span>
      </h1>
    </>
  );
}

export default App;
