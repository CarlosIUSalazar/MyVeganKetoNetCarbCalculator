import React from 'react'

function Results(props){

    return (
        <>
            <div><span>
                <h5>Total Net Carbs is:</h5>
                <span><p className="netResult">{ props.grandTotal } grams</p></span>
            
                <h5>Total Protein is:</h5>
                <span><p className="proteinTotal">{ props.proteinTotal } grams</p></span>
            </span></div>
        </>
    )
}

export default Results