import React from 'react';
import { useEffect, useState } from "react";
import { viewDealDetails } from './services';
import messageCodes from './messageCodes';


const DealDetails = function({ match }) {
    const id = match.params.id;
    const [dealDetails, setDealDetails] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        viewDealDetails({ id })
        .then(dealInfo => {
            setDealDetails(dealInfo);
        })
        .catch(err => {
            setStatus(messageCodes[err.error]);
        })
    }, [id]);


    if(dealDetails == null){
        <h1>Loading</h1>
    }
    else {
    return (
        <div> 
        <div className="details-title"> 
            <h1> DETAILS </h1>
        </div>
        <div className="deal-details">
        {status && <div className="status"> {status} </div>}
            <div className="detail-image"> 
                <img className="product-image" src={dealDetails.image} alt="Product"/>
            </div>
            <div className="text"> 
            <label> PRODUCT NAME </label>
                <span> {dealDetails.itemName} </span> <br/>
            <label> WHERE TO BUY </label>
                <span> <a href={dealDetails.websiteLink} rel="noopener noreferrer" target="_blank"> CLICK HERE</a> </span> <br/>
            <label> PRICE :</label>
                <span> {dealDetails.price} </span> <br/>
            <label> ABOUT THE PRODUCT  </label>
                <span> {dealDetails.description} </span> <br/>
            <label> OFFER EXPIRES ON </label>
                <span> {dealDetails.expirationDate}</span> <br/>
            <label> CATEGORY</label>
                <span> {dealDetails.category}</span> 
            </div>
        </div>
        </div> );
    }
}

export default DealDetails;