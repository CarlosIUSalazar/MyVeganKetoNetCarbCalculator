import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Table(props){

    const foodTable = {
        columnDefs:[
            { headerName: "Food", field: "food" },
            { headerName: "Grams", field: "grams" },
            { headerName: "Carbs", field: "carbs" }],
        rowData:[]
    }

    //{ food: "Ford", grams: "Mondeo", carbs: 32000 },

      console.log("props",props)

      function insertObjets(props){
        for (let obj of props.tableOfFoods){
            let newObj = {food:obj.food, grams:obj.grams, carbs:obj.carbs}
            foodTable.rowData.push(newObj)
            newObj = {};
        }
      }

      insertObjets(props)
    console.log("foodTable",foodTable)

    return (
        <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
        <AgGridReact
            columnDefs={foodTable.columnDefs}
            rowData={foodTable.rowData}>
        </AgGridReact>
      </div>
    )
}

export default Table;



    // const foodTable = {
    //     columnDefs: [
    //       { headerName: "Food", field: "food" },
    //       { headerName: "Grams", field: "grams" },
    //       { headerName: "Carbs", field: "carbs" }],
    //     rowData: [
    //       { food: "Toyota", grams: "Celica", carbs: 35000 },
    //       { food: "Ford", grams: "Mondeo", carbs: 32000 },
    //       { food: "Porsche", grams: "Boxter", carbs: 72000 }]
    //   }