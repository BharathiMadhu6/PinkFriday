import { getDealsAddedByUser, removeDeal } from './services';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import messageCodes from './messageCodes';


const MyAccount = function({ username }) {
    const [myDeals, setMyDeals] = useState([]);
    const [status, setStatus] = useState('');
    let content = '';
   
    useEffect(() => {
        getDealsAddedByUser({ username })
        .then(dealsInfo => {
            setMyDeals(dealsInfo);
        })
        .catch(err => {
            setStatus(messageCodes[err.error]);
        });
    }, [username]);


    const deleteDeal = function(e) {
        const id = e.target.dataset.index;
        removeDeal({ id })
        .then(dealsInfo => {
            setMyDeals(dealsInfo);
        })
        .catch(err => {
            setStatus(messageCodes[err.error]);
        });
    };


    if(username === undefined){
        content = ''
    }
    else if(myDeals && !myDeals.length){
        content = (
            <div> 
                <h3> USERNAME : {username}</h3>
                <h3 className="account-message"> YOUR ACCOUNT HAS NO DEALS, PLEASE ADD NEW DEALS TO MANAGE THEM  </h3>
            </div>
        );
    }
    else {
        content = (
            <div>
                <h3> USERNAME : {username}</h3>
                <h4> DEALS ADDED BY YOU </h4>
                <ul className="added-deals"> 
                {myDeals.map(item => (
                    <li className="item" key={item.id}> 
                    <Link to={`/viewDetails/${item.id}`} key={item.id} > {item.itemName} </Link>
                    <button onClick={deleteDeal} data-index={item.id}> DELETE </button>
                    </li>
                ))}
                </ul>
            </div> )
    }

    
    return (
        <div>
            <h2 className="account-title"> YOUR ACCOUNT </h2>
            <div className="account">
                {status && <div className="status"> {status} </div>}
                {content}
        </div>
        </div>

    )
}

export default MyAccount;

