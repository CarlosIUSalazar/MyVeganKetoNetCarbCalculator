import React, { useState } from 'react';
import Header from './Components/Header'
import FoodInput from './Components/FoodInput'
import DropdownMenu from './Components/DropdownMenu'
import Results from './Components/Results'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import Table from './Components/Table'

export const grandCarbsTotal = React.createContext()

function App() {

  const [grandTotal, setGrandTotal] = useState(0)

  function updateGrandTotal(eatenGrams, foodName){
    setGrandTotal((parseInt(grandTotal) + (parseInt(eatenGrams/100) * foodName.netCarbs)).toFixed(2))
    
    
    //console.log("NetnetCarbs, foodName, eatenGrams", netCarbs, foodName, eatenGrams)

    tableOfFoods.push({food:foodName.name, grams: eatenGrams, carbs:((foodName.netCarbs * parseInt(eatenGrams/100))).toFixed(2)})

    //console.log("foodName.netCarbs",foodName.netCarbs)
    //console.log("parseInt(eatenGrams/100)",parseInt(eatenGrams/100))
    //console.log("Multiplication",parseInt(eatenGrams/100) * foodName.netCarbs)
  }

  const [tableOfFoods, setTableOfFoods] = useState([
    
  ])

  function updateTableOfFoods(newFood){
    setTableOfFoods(tableOfFoods.push(newFood))

  }

  return (
    <center>
    <div className="App">
      <Header />
      <DropdownMenu updateGrandTotal={updateGrandTotal} grandTotal={grandTotal}/> 
      <Results grandTotal={grandTotal}/>
      <Table tableOfFoods={tableOfFoods}/>
    </div>
    </center>
  );
}

export default App;