import React, { useState } from 'react';
import Header from './Components/Header'
import DropdownMenu from './Components/DropdownMenu'
import Results from './Components/Results'
import './styles/App.css'
import Table from './Components/Table'

export const grandCarbsTotal = React.createContext()

function App() {

  const [tableOfFoods, setTableOfFoods] = useState([])
  const [grandTotal, setGrandTotal] = useState(0)
  const [proteinTotal, setProteinTotal] = useState(0)

  function updateGrandTotal(eatenGrams, foodName){
    
    //console.log("Foodname, protein, netCarbs",foodName, foodName.protein, foodName.netCarbs)

    //Add to Net Carb Grand Total
    setGrandTotal((parseInt(grandTotal) + (parseInt(eatenGrams/100) * foodName.netCarbs)).toFixed(2))
    
    //Add Selected food to table
    tableOfFoods.push({food:foodName.name, grams: eatenGrams, carbs:((foodName.netCarbs * parseInt(eatenGrams/100))).toFixed(2)})
    
    //Calculate and Add to Total Protein
    setProteinTotal((parseInt(proteinTotal) + parseInt(foodName.protein)).toFixed(2))
  
  }

  

  // function updateTableOfFoods(newFood){
  //   setTableOfFoods(tableOfFoods.push(newFood))
  // }

  return (
    <center>
    <div className="App">
      <Header />
      <DropdownMenu 
        updateGrandTotal={updateGrandTotal} 
        grandTotal={grandTotal}

      /> 
      <Results 
        grandTotal={grandTotal}
        proteinTotal={proteinTotal}  
      />
      <Table tableOfFoods={tableOfFoods}/>
    </div>
    </center>
  );
}

export default App;