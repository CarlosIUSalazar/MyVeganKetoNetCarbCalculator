import React, {useState } from 'react'

function Results(props){

    return (
        <>
            <h5>Total Net Carbs is:</h5>
            <span><p className="netResult">{ props.grandTotal } grams</p></span>
        </>
    )
}

export default Results