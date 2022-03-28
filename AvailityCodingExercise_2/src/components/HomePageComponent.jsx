import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePageComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
        props.setUser(localStorage.getItem('loggedInUser'));
      }, [])

    function handleLogOut(event) {
        event.preventDefault();
        localStorage.clear();
        navigate("/")
    }

    return(
        <div>
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <h2 className='navbar-brand'>Availity</h2>
                        </div>
                        <div>
                            <button className="btn btn-outline-secondary" onClick={handleLogOut}>Log Out</button>
                        </div>
                    </nav>
                </header>
            </div>
            <h1 className='text-center'>Welcome {props.value}!</h1>
            <div className='row'>
                <div>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>NPI Number</th>
                                <th>Address</th>
                                <th>Phone #</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.tableValues.map(
                                    tableValue =>
                                    <tr key={tableValue.npi}>
                                        <td>{tableValue.name}</td>
                                        <td>{tableValue.npi}</td>
                                        <td>{tableValue.address}</td>
                                        <td>{tableValue.telephone}</td>
                                        <td>{tableValue.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HomePageComponent;