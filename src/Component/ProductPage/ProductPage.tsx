import React, { useEffect, useState } from 'react';
import {ProductDetails} from "../ProductDetails/ProductDetails";
import {SalesChart} from "../SalesChart/SalesChart";
import {SalesTable} from "../SalesTable/SalesTable";
import {ProductSalesInterface} from "../../Interface/ProductDataInterface";
import {ProductDetailInterface} from "../../Interface/ProductDataInterface";
import './productPage.css';
import logo from  '../../stackline_logo.svg';


export default function ProductPage(){
    const [prodData, setData] = useState([]);

    const currentProduct = 'B007TIE0GQ';

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/data/stackline_frontend_assessment_data_2021.json", {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => setData(data))
      }, []);

    let ProductDetailsData: ProductDetailInterface = {
        id: "",
        title: "",
        subtitle: "",
        brand: "",
        tags: [],
        image: ""
    }

    let prodSalesData: ProductSalesInterface[] = [];

    if(prodData){
        let currentProductData =  prodData.find((obj: { id: string; }) => obj.id === currentProduct);

        ProductDetailsData.id = currentProductData? currentProductData['id'] : "";
        ProductDetailsData.title = currentProductData? currentProductData['title'] : "";
        ProductDetailsData.subtitle = currentProductData? currentProductData['subtitle'] : "";
        ProductDetailsData.brand = currentProductData? currentProductData['brand'] : "";
        ProductDetailsData.tags = currentProductData? currentProductData['tags'] : [];
        ProductDetailsData.image = currentProductData? currentProductData['image'] : "";

        prodSalesData =  currentProductData? currentProductData['sales'] : [];
    }


    return(<>
    <div className='navBar'>
        <img src={logo} width={100} height={50}></img>
    </div>
    <div className='container'>
        <div className='container'>
            <ProductDetails productData={ProductDetailsData}></ProductDetails>
            <div className='prodDataContainer'>
                <SalesChart sales = {prodSalesData}></SalesChart>
                <SalesTable sales = {prodSalesData}></SalesTable>
            </div>
        </div>
    </div>
    </>)
}