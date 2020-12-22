import React from 'react';
import { useEffect, useState } from 'react';
import { loadDeals } from './services';
import { Link } from "react-router-dom";
import messageCodes from './messageCodes';


const Home = function() {
    const [listOfDeals, setListOfDeals] = useState([]);

    useEffect(() => {
        loadDeals()
        .then(deals => {
          setListOfDeals(deals);
        })
    }, []);


    let dealsContent = '';


    if(listOfDeals === null || listOfDeals === undefined){
        dealsContent = ''
    }
    else {
        dealsContent = (
            <div>
                <h2 className="title"> BEST DEALS FOR YOU </h2>
                <ul className="deals-list">
                    {
                        listOfDeals.map(item => (
                        <div className="individual-deal"> 
                            <li className="item" key={item.id} data-index={item.id}> 
                                <img className="product-image" src={item.image} alt="Product"/>
                                <Link to={`/viewDetails/${item.id}`} key={item.id}> {item.itemName} </Link>
                                <br/>{item.price} <br/>
                                <span className="exp-date"> Expires on {item.expirationDate} </span> 
                            </li>
                        </div>
                        ))
                    }
                </ul>
            </div> 
        );
    }


    return(
        <div className="deals">
            {dealsContent}
        </div>
    );
};

export default Home;
