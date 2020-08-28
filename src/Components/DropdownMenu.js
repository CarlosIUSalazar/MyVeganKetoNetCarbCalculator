import React, { useState, useRef } from 'react'
import Select from 'react-select';  //https://www.youtube.com/watch?v=mhLVjY09FOc
import "../styles/DropdownMenu.css"

import data from '../data'

function DropdownMenu(props){

    const foodGrams = useRef(0);
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [selectedValue, setSelectedValue] = useState("Select a Food")

    const handleChange = obj => {
        setSelectedValue(obj)
    }

    function updateTotalCarbs(amount){
        setTotalCarbs(amount)
    }

    return (
        <>
            <div className="selectBar">
            <Select
                value = {selectedValue} 
                options={data}
                onChange={handleChange}
                isOptionDisabled={option => option.isDisabled}
                getOptionLabel={option => option.name}  //Esta linea sirve para cambiar el valor de "label" (default) a 'name' en el objeto en este caso. 
                
            />
            </div>
            <span><input ref={foodGrams} type="text" defaultValue={0}></input>grams</span>
            <br />
            <button onClick={() => props.updateGrandTotal(foodGrams.current.value, selectedValue)}>+</button>

        </>
    )
}

export default DropdownMenu;


// onClick={() => {
//     props.addNewItem(inputText.current.value);
//   }}


// <br/>
// <b>Net Grams of This Food:</b>
// <pre>{JSON.stringify(selectedValue.netCarbs,null)}</pre>

    //let result = 0;
    // function calculateCarbs(foodInGrams){
    //     console.log("foodInGrams",foodInGrams)
    //     console.log("selectedValue.netCarbs", selectedValue.netCarbs)
    //     result = selectedValue.netCarbs * (foodInGrams/100)
    //     console.log("Result",result)
    //     updateTotalCarbs(result);
    // }