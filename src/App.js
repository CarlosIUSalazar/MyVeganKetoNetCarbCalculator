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
  const [fatTotal, setFatTotal] = useState(0)
  const [caloriesTotal, setCaloriesTotal] = useState(0)

  function updateGrandTotal(eatenGrams, foodName){
    
    //console.log("eatenGrams, netCarbs, Protein", eatenGrams, foodName.netCarbs, foodName.protein,)
    //Add Selected food to table
    tableOfFoods.push({food:foodName.name, grams: eatenGrams, carbs:((foodName.netCarbs * parseInt(eatenGrams)/100)).toFixed(2)})
    
    //Add to Net Carb Grand Total
    setGrandTotal((parseInt(grandTotal) + ((parseInt(eatenGrams)/100) * foodName.netCarbs)).toFixed(2))

    //Calculate and Add to Total Protein
    setProteinTotal((parseInt(proteinTotal) + ((parseInt(eatenGrams)/100) * foodName.protein)).toFixed(2))

    //Calculate and Add to Total Fat
    setFatTotal((parseInt(fatTotal) + ((parseInt(eatenGrams)/100) * foodName.fat)).toFixed(2))    

    //Calculate and Add to Total Calories
    setCaloriesTotal((parseInt(caloriesTotal) + ((parseInt(eatenGrams)/100) * foodName.calories)).toFixed(2))
  }

  // function updateTableOfFoods(newFood){
  //   setTableOfFoods(tableOfFoods.push(newFood))
  // }

  return (
    
    <div className="App">
      <center>
      <Header />
      <DropdownMenu 
        updateGrandTotal={updateGrandTotal} 
        grandTotal={grandTotal}
      /> 
      <Results 
        grandTotal={grandTotal}
        proteinTotal={proteinTotal}
        caloriesTotal={caloriesTotal}
        fatTotal={fatTotal}
      />
      <Table tableOfFoods={tableOfFoods} setTableOfFoods={setTableOfFoods}/>
      </center>
    </div>
    
  );
}

export default App;