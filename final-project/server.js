const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;
const utilityMethods = require('./utilityMethods');

app.use(cookieParser());
app.use(express.json());
app.use(express.static('./build'));



function isEmpty(data) {
    const value = data.trim();
    return (!value || 0 === value.length);
};


app.get('/deals', (req, res) => {
    const items = Object.values(utilityMethods.dealsList).map(item => item);
    res.status(200).json(items);
});


app.get('/session', (req, res) => {
    const sid = req.cookies.sid;

    if(!sid){
        res.status(401).json({ error: 'session-required' });
        return;
    }

    if( !utilityMethods.isValid(sid) ){
        res.status(403).json({ error: 'session-invalid' });
        return;
    }
    const username = utilityMethods.sessions[sid].name;
    res.status(200).json(utilityMethods.sessions[sid].name);
});


app.post('/session', express.json(), (req, res) => {
    const { username } = req.body;
    const {sid, error } = utilityMethods.create({ username });
    
    if(error){
        res.status(400).json({ error });
        return;
    }

    res.cookie('sid', sid);
    res.status(200).json(utilityMethods.sessions[sid].name);
});



app.get('/deals/:dealId', express.json(), (req, res) => {
    const id = req.params.dealId;
    res.status(200).json(dealsList[id]);
});


app.post('/session/deal', express.json(), (req, res) => {
    const sid = req.cookies.sid;

    if(utilityMethods.isValid(sid)){
        const { username } = req.body;
        const { itemName } = req.body;
        const { websiteLink } = req.body;
        const { image } = req.body;
        const { price } = req.body;
        const { description } = req.body;
        const { expirationDate } = req.body;
        const { category } = req.body;

        if(isEmpty(itemName) || isEmpty(websiteLink) || isEmpty(price) || isEmpty(description) || isEmpty(expirationDate) || isEmpty(category)){
            res.status(401).json({ error: 'not-enough'});
            return;
        }
        else if(itemName !== '' && websiteLink !== '' && price !== '' && description !== '' && expirationDate !== '' && category !== ''){
            const dealID = utilityMethods.pushDeal({ username, itemName, websiteLink, image, price, description, expirationDate, category});
            res.status(200).json({ dealID });
            return;
        }
    }

    res.status(401).json({error: 'login needed'});
    return;
});


app.get('/session/:id', (req, res) => {
    const dealId = req.params.id;
    const details = utilityMethods.dealsList[dealId];
    res.status(200).json(details);
    return;
});


app.get('/account/:username', (req, res) => {
    const sid = req.cookies.sid;
    const username = req.params.username;

    if(!utilityMethods.isValid(sid)){
        res.status(401).json({error: 'login needed'});
        return;
    }

    const deals = Object.values(utilityMethods.users[username].deals) 
    const items = [];
    for(let i = 0; i < deals.length; i++){
        items.push(utilityMethods.dealsList[deals[i].identificationOfDeal]);
    }

    res.status(200).json(items);
    return;
});


app.delete('/account/:id', (req, res) => {
    const sid = req.cookies.sid;
    const dealId = req.params.id;

    if(utilityMethods.isValid(sid)){
        const username = utilityMethods.sessions[sid].name; 
        const keys = Object.keys(utilityMethods.users[username].deals);

        utilityMethods.deleteDeal(dealId, username, keys);
        const deals = Object.values(utilityMethods.users[username].deals);
        const items = [];
        if(deals.length === 0){
            res.status(200).json({});
            return;
        }

        for(let i = 0; i < deals.length; i++){
            items.push(utilityMethods.dealsList[deals[i].identificationOfDeal]);
        }

        res.status(200).json(items);        
        return;
    }

    res.status(401).json({error: 'login needed'});
});


app.delete('/session', (req, res) => {
    const sid = req.cookies.sid;
    if(!utilityMethods.isValid(sid)){
        res.json({error: 'login-needed'});
        return;
    }
    utilityMethods.remove(sid);
    res.clearCookie('sid');
    res.json({ sid, status: 'removed' });
});


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});