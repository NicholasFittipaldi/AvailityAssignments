import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterComponent(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [npiNumber, setNpiNumber] = useState("");
    const [streetAddress, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const tableData = {name: firstName + " " + lastName, npi: npiNumber, 
                            address: streetAddress + ", " + city + ", " + state + " " + zipcode,
                            telephone: telephone, email: email, password: password};
        localStorage.setItem('loggedInUser', firstName + " " + lastName);
        props.addValues(array => [...array, tableData]);
        navigate("/homepage");
    }

    function handleCancel(event) {
        event.preventDefault();
        navigate("/homepage");
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
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <div className='card-body'>
                            <form>
                                <h3 className='text-center'>Register</h3>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name' name='firstName' className='form-control' value={firstName} 
                                    onChange={(event) => setFirstName(event.target.value)} style={{marginBottom: '10px'}} required/> 
                                </div>
                                <div className='form-group'>
                                    <label>Last Name</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control' value={lastName} 
                                    onChange={(event) => setLastName(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input placeholder='Email' name='email' className='form-control' value={email} 
                                    onChange={(event) => setEmail(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>Create Password</label>
                                    <input placeholder='Create Password' name='password' className='form-control' value={password} 
                                    onChange={(event) => setPassword(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>NPI Number</label>
                                    <input placeholder='NPI' name='npiNumber' className='form-control' value={npiNumber} 
                                    onChange={(event) => setNpiNumber(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>Street Address</label>
                                    <input placeholder='Street Address' name='streetAddress' className='form-control' value={streetAddress} 
                                    onChange={(event) => setStreet(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>City</label>
                                    <input placeholder='City' name='city' className='form-control' value={city} 
                                    onChange={(event) => setCity(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>State</label>
                                    <input placeholder='State' name='state' className='form-control' value={state} 
                                    onChange={(event) => setState(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>Zipcode</label>
                                    <input placeholder='Zip' name='zipcode' className='form-control' value={zipcode} 
                                    onChange={(event) => setZipcode(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <div className='form-group'>
                                    <label>Telephone</label>
                                    <input type="tel" placeholder='ex: 000-000-0000' name='telephone' className='form-control' value={telephone} 
                                    onChange={(event) => setTelephone(event.target.value)} style={{marginBottom: '10px'}} required/>
                                </div>
                                <button className='btn btn-primary' onClick={handleSubmit} type='submit'>Submit</button>
                                <button className='btn btn-danger' onClick={handleCancel} style={{marginLeft: '10px'}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;