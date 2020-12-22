const uuid = require('uuid').v4;

const dealsList = require('./dealsList');
const sessions = {};
const users = {};

const isValid = function(sid) {
    return !!sessions[sid];
};


const createUser = function(username) {
    users[username] = { name: username, deals: {} };
}


const isValidUsername = function( username ) {
    const errors = [];

    if(!username){
        errors.push('username-required');
    }

    const cleanUsername = username.replace(/[^a-zA-Z0-9_\-]/g, '');

    if(username !== cleanUsername){
        errors.push('bad-characters');
    }
    return errors.length ? errors : '';
}


const counter = () => {
    let idCount = 20;
    return() => {
        idCount += 1;
        return idCount;
    };
};


nextId = counter();


const create = function({ username }) {
    const error = isValidUsername(username);

    if(!users[username]) {
        createUser(username);
    }

    if(error){
        return { error };
    }

    const sid = uuid();
    sessions[sid] = { name: username };

    return { sid };
};


const remove = function( sid ) {
    delete sessions[sid];
};


const deleteDeal = function( id, username, keys ) {
    delete dealsList[id];

    if(users[username]){
        for(let i = 0; i < keys.length; i++){
            if(users[username].deals[keys[i]].identificationOfDeal == id){
                delete users[username].deals[keys[i]];
            }
        }
    }
};


const pushDeal = function({ username, itemName, websiteLink, image, price, description, expirationDate, category }) {
    const dealId = nextId();
    dealsList[dealId] = {id: dealId, itemName: itemName, websiteLink: websiteLink, image: image, price: price, description: description, expirationDate: expirationDate,
                         category: category};
    
    const userDealId = nextId();
    users[username].deals[userDealId] = {identificationOfDeal: dealId};
    return dealId;
}


module.exports = {
    sessions,
    users,
    dealsList,
    isValidUsername,
    create,
    remove,
    isValid,
    pushDeal,
    deleteDeal
};