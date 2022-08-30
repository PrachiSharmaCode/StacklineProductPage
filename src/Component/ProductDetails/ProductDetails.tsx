import React from 'react';
import "./productDatails.css";
import {ProductDetailInterface} from "../../Interface/ProductDataInterface";

export function ProductDetails(props: {productData: ProductDetailInterface}){

    let getTagList = () =>{
        let tagList: any = [];
        props.productData.tags?.map((tag) =>{
             tagList.push(<button className='tagButton'>{tag}</button>)
        })
        return tagList;
    }

    return(<>
    <div className="Container">
        <img className='prodImg' src={props.productData.image} height='200' width='200'></img>
        <h3 className='productTitle'>{props.productData.title}</h3>
        <p className='productSubtitle'>{props.productData.subtitle}</p>
        <hr></hr>
            <div>{getTagList()}</div>
        <hr></hr>
    </div>
    </>)
}