import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginComponent(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const arraySize = props.tableValues.length;

    function handleLogin(event) {
        event.preventDefault();

        if (username === "" || password === "")
            alert("Please fill in all required fields.");
        else if (props.tableValues && arraySize) {
            for (let i = 0; i < arraySize; i++) {
                if (props.tableValues[i].email === username && props.tableValues[i].password === password) {
                    localStorage.setItem('loggedInUser', props.tableValues[i].name);
                    navigate("/homePage");
                    break;
                }
            }
        }
        else
            alert("Invalid Username or Passwrod.");
    }

    function handleRegister(event) {
        event.preventDefault();
        navigate("/register");
    }

    return(
        <div>
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <h2 className='navbar-brand'>Availity</h2>
                        </div>
                    </nav>
                </header>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 offset-md-3'>
                        <div className='card card-body'>
                            <h3 className='text-center'>Login</h3>
                            <form>
                                <div className='form-group'>
                                    <label>Username</label>
                                    <input placeholder='Username' name='username' className='form-control' value={username} 
                                    onChange={(event) => setUsername(event.target.value)} style={{marginBottom: '10px'}} required/> 
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type='password' placeholder='Password' name='password' className='form-control' value={password} 
                                    onChange={(event) => setPassword(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <button className='btn btn-primary' onClick={handleLogin}>Login</button>
                                <button className='btn btn-primary' onClick={handleRegister} style={{marginLeft: '10px'}}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;