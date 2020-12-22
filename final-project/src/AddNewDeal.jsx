import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { pushNewDeal } from './services';
import messageCodes from './messageCodes';

const AddNewDeal = function({ username }) {
    const [itemName, setItemName] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [category, setCategory] = useState('kitchen');
    const [newDealId, setNewDealId] = useState('');
    const [status, setStatus] = useState('');
    const history = useHistory();
    const defaultImage = 'https://elegantfare.com/wp-content/themes/elegantfare/images/default.jpg';
    const maxDate = new Date('2021-12-24');
    const minDate = new Date('2020-12-13');

    const showDetails = function(id) {
        history.push(`viewDetails/${id.dealID}`);
    }

    const handleItemName = (e) => {
        setItemName(e.target.value);
    };

    const handleWebsiteLink = (e) => {
        const link = e.target.value;

        if(isURL(link)) {
            setStatus('');
            setWebsiteLink(e.target.value);
        }
        else {
            setStatus('Please enter a valid URL');
            setWebsiteLink('');
        }
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleExpirationDate = (e) => {
        let date = e.target.value;
        date = new Date(date);
        if( date > maxDate) {
            setStatus('The date you are picking is not in the permissable range');
            setExpirationDate('');
        }
        else if( date < minDate) {
            setStatus('Please select a valid date');
            setExpirationDate('');
        }
        else {
            setStatus('');
            setExpirationDate(e.target.value);
        }
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };


    function isURL(link) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
        '(\\#[-a-z\\d_]*)?$','i'); 
        return pattern.test(link);
        link = new URL(link);
    }

    const submitNewDeal = () => {
        const dealData = {
            "username": username,
            "itemName": itemName,
            "websiteLink": websiteLink,
            "image": defaultImage,
            "price": price,
            "description": description,
            "expirationDate": expirationDate,
            "category": category, 
        };
        setItemName('');
        setPrice('');
        setWebsiteLink('');
        setDescription('');
        setExpirationDate('');
        setCategory('');
        pushNewDeal(dealData)
        .then(id => {
            setNewDealId(id);
            showDetails(id);
        })
        .catch(err => {
            setStatus(messageCodes[err.error]);
        });
   };

   let content;

   if(username === undefined){
    content = <h3> You need to login to add products to PINK FRIDAY </h3>
   }
   else {
       content = (
        <div>   
            <div> 
                <h2>ADD A NEW DEAL </h2>
            </div>
            <div className="new-deal">
                <label> Product name </label>
                <input type="text" onChange={handleItemName} value={itemName} /> <br/>

                <label> Website link </label>
                <span className="link-format"> 
                    <textarea onChange={handleWebsiteLink} value={websiteLink} rows="3" cols="40"></textarea> <br/>
                    <span className="tip"> You can only PASTE a link into this field</span>
                </span>

                <label> Price </label>
                <input type="number" min="5" max="5000" onChange={handlePrice} value={price} /> <br/>

                <label> Description </label>
                <textarea onChange={handleDescription} value={description} rows="5" cols="40"></textarea> <br/>

                <label> Expiration Date </label>
                <input type="date" onChange={handleExpirationDate} min="12-13-2020" max="12-24-2021" value={expirationDate} /> <br/>

                <label> Category </label>
                <select className="category" name="category" id="category" onChange={handleCategory} value={category}>
                    <option value="Kitchen" >Kitchen</option>
                    <option value="Decor" >Decor</option>
                    <option value="Apparel" >Apparel</option>
                    <option value="Gadgets" >Gadgets</option>
                    <option value="Accessories" >Accessories</option>
                    <option value="Accessories" >Accessories</option>
                    <option value="Fragrances" >Fragrances</option>
                    <option value="Other">Other</option>
                </select> <br/>

                <button onClick={submitNewDeal}> SUBMIT </button>
                {status && <div className="status"> {status} </div>}
            </div>
        </div>)
        }

        
    return (
        <div> 
            {content}
        </div> )
}

export default AddNewDeal;


