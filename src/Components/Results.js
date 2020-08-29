import React from 'react'
import '../styles/Results.css'
function Results(props){

    return (
        <>
            <div className="row disp">
                <h5>Total Net Carbs is:</h5>
                <span><p className="netResult">{ props.grandTotal } grams</p></span>
            
                <h5>Total Protein is:</h5>
                <span><p className="proteinTotal">{ props.proteinTotal } grams</p></span>

                <h5>Total Fat is:</h5>
                <span><p className="fatTotal">{ props.fatTotal } grams</p></span>

                <h5>Total Calories is:</h5>
                <span><p className="caloriesTotal">{ props.caloriesTotal }</p></span>
            </div>
        </>
    )
}

export default Results