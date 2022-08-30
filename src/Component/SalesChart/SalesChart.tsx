import React from 'react';
import "./SalesChart.css";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import {ProductSalesInterface} from "../../Interface/ProductDataInterface";
Chart.register(...registerables);

export function SalesChart(props: {sales: ProductSalesInterface[]}){

    const data = props.sales;

    const monthMatch = {
        "Jan": 0,
        "Feb": 1,
        "Mar": 2,
        "Apr": 3,
        "May": 4,
        "Jun": 5,
        "Jul": 6,
        "Aug": 7,
        "Sept": 8,
        "Oct": 9,
        "Nov": 10,
        "Dec": 11,
    }

    let retailData = new Array(12).fill(0);
    let wholeSales = new Array(12).fill(0);

    const retailSales = data.find((obj: { weekEnding: string, retailSales: number, wholesaleSales: number }) => {
        let month = obj.weekEnding.substring(5,7);

        if(month === '01'){
            retailData[monthMatch.Jan] = retailData[monthMatch.Jan] + obj.retailSales;
            wholeSales[monthMatch.Jan] = wholeSales[monthMatch.Jan] + obj.wholesaleSales;
        }
        if(month === '02'){
            retailData[monthMatch.Feb] = retailData[monthMatch.Feb] + obj.retailSales;
            wholeSales[monthMatch.Feb] = wholeSales[monthMatch.Feb] + obj.wholesaleSales;
        }
        if(month === '03'){
            retailData[monthMatch.Mar] = retailData[monthMatch.Mar] + obj.retailSales;
            wholeSales[monthMatch.Mar] = wholeSales[monthMatch.Mar] + obj.wholesaleSales;
        }
        if(month === '04'){
            retailData[monthMatch.Apr] = retailData[monthMatch.Apr] + obj.retailSales;
            wholeSales[monthMatch.Apr] = wholeSales[monthMatch.Apr] + obj.wholesaleSales;
        }
        if(month === '05'){
            retailData[monthMatch.May] = retailData[monthMatch.May] + obj.retailSales;
            wholeSales[monthMatch.May] = wholeSales[monthMatch.May] + obj.wholesaleSales;
        }
        if(month === '06'){
            retailData[monthMatch.Jun] = retailData[monthMatch.Jun] + obj.retailSales;
            wholeSales[monthMatch.Jun] = wholeSales[monthMatch.Jun] + obj.wholesaleSales;
        }
        if(month === '07'){
            retailData[monthMatch.Jul] = retailData[monthMatch.Jul] + obj.retailSales;
            wholeSales[monthMatch.Jul] = wholeSales[monthMatch.Jul] + obj.wholesaleSales;
        }
        if(month === '08'){
            retailData[monthMatch.Aug] = retailData[monthMatch.Aug] + obj.retailSales;
            wholeSales[monthMatch.Aug] = wholeSales[monthMatch.Aug] + obj.wholesaleSales;
        }
        if(month === '09'){
            retailData[monthMatch.Sept] = retailData[monthMatch.Sept] + obj.retailSales;
            wholeSales[monthMatch.Sept] = wholeSales[monthMatch.Sept] + obj.wholesaleSales;
        }
        if(month === '10'){
            retailData[monthMatch.Oct] = retailData[monthMatch.Oct] + obj.retailSales;
            wholeSales[monthMatch.Oct] = wholeSales[monthMatch.Oct] + obj.wholesaleSales;
        }
        if(month === '11'){
            retailData[monthMatch.Nov] = retailData[monthMatch.Nov] + obj.retailSales;
            wholeSales[monthMatch.Nov] = wholeSales[monthMatch.Nov] + obj.wholesaleSales;
        }
        if(month === '12'){
            retailData[monthMatch.Dec] = retailData[monthMatch.Dec] + obj.retailSales;
            wholeSales[monthMatch.Dec] = wholeSales[monthMatch.Dec] + obj.wholesaleSales;
        }
    }  );

    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'Auguest', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Retail Sales',
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 2,
                data: retailData,
            },
            {
                label: 'Whole Sales',
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 2,
                data: wholeSales,
            }
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Retail Sales',
            },
        },
        maintainAspectRatio: false
    };


    return (<div className="ChartContainer">
        <Line
            data={state}
            options={options}
            width={"100%"} 
            height={"50vh"}
        />
    </div>)
}