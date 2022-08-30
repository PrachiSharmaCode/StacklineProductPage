import React from 'react';
import "./SalesTable.css";
import DataTable from "react-data-table-component";
import {ProductSalesInterface} from "../../Interface/ProductDataInterface";


export function SalesTable(props: {sales: ProductSalesInterface[] | undefined}){

    const columns = [
        {
            name: "WEEK ENDING",
            selector: (row: { weekEnding: string; }) => row.weekEnding,
            sortable: true,
            reorder: true
        },
        {
            name: "RETAIL SALES",
            selector: (row: any) => row.retailSales,
            sortable: true,
            reorder: true
        },
        {
            name: "WHOLE SALES",
            selector: (row: any ) => row.wholesaleSales,
            sortable: true,
            right: true,
            reorder: true
        },
        {
            name: "UNITS SOLD",
            selector: (row:any ) => row.unitsSold,
            sortable: true,
            reorder: true
        },
        {
            name: "RETAILER MARGIN",
            selector: (row: any ) => row.unitsSold,
            sortable: true,
            right: true,
            reorder: true
        }
    ];


    return (<div className="TableContainer">
        <DataTable
          columns={columns}
          data= {props.sales? props.sales : []}
          defaultSortFieldId={1}
          pagination
        />
    </div>)
}