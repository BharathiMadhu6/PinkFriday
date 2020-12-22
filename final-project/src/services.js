export const loadDeals = () => {
    return fetch('/deals', {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error'}))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json));
    });
};


export const checkSession = () => {
    return fetch('/session', {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error'}))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json));
    });
};


export const createSession = ({ username }) => {
    return fetch('/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ username }),
    })
    .catch( () => Promise.reject({ error: 'network-error' }))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json));
    });
};


export const pushNewDeal = (dealData) => {
    return fetch('/session/deal', { 
        method: 'POST',               
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify(dealData),
    })
    .catch( () => Promise.reject({ error: 'network-error' }))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json));
    });
};


export const viewDealDetails = ({id}) => {
    return fetch(`/session/${id}`, {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error' }))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json));
    });
};


export const getDealsAddedByUser = ({ username }) => {
    return fetch(`/account/${username}`, {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error' }))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json));
    });
};


export const removeDeal = ({ id }) => {
    return fetch(`/account/${id}`, {
        method: 'DELETE',
    })
    .catch( () => Promise.reject({ error: 'network-error' }))
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( json => Promise.reject(json));
    });
};


export const endSession = () => {
    return fetch('/session',  {
      method: 'DELETE',
    })
    .catch( () => Promise.reject({ error: 'network-error'}))
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return response.json().then( json => Promise.reject(json));
    });
};