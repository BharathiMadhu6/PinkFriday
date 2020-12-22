import { useState } from 'react';
import { createSession } from './services';
import messageCodes from './messageCodes';
import { useHistory } from 'react-router-dom';
import './App.css';

const Login = function({ onLogin}) {
    const [username, setUsername] = useState('');
    const [isDisabled, setIsDiabled] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState('');
    const history = useHistory();

    const onChange = (e) => {
        setUsername(e.target.value);
        setIsDiabled(!e.target.value);
    };

    const showHome = function() {
        history.push("/");
    }

    const login = () => {
        setIsPending(true);
        createSession({ username })
        .then( userinfo => {  
            setIsPending(false);
            onLogin({ username: userinfo });
            showHome();
        })
        .catch( err => {
            setStatus(messageCodes[err.error]);
            setIsPending(false);
        });
    };


    return (
        <div className="login-box"> 
        <h2> LOGIN TO ADD NEW DEALS </h2>
        <span> 
            <label className="username-label"> USERNAME </label>
        </span>
        <span> 
            <input className="username" disabled={isPending} onChange={onChange} value={username} />
        </span>
        <span>
            <button className="login-button" onClick={login} disabled={isDisabled || isPending} > {isPending ? "..." : "LOGIN"} </button>
        </span>
        {status && <div className="status"> {status} </div>}
        </div>
    );
};

export default Login;