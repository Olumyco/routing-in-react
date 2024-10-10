import React from 'react';

const Home = ({ history }) => {
    
    const login = () => history.push('/login');
    const dashboard = () => history.push('/dashboard');
    const dashboardABC = () => history.push('/dashboard/abc');

    return (
        <div>
            <h2>Home</h2>
            <button onClick={login}>Login</button>
            <button onClick={dashboard}>Dashboard</button>
            <button onClick={dashboardABC}>Dashboard ABC</button>
        </div>
    );
};

export default Home;