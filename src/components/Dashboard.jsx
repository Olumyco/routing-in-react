import React from 'react';

const Dashboard = ({ history, match }) => {
    const profile = () => history.push('/dashboard/profile');
    const blog = () => history.push('/dashboard/blog');
    console.log(match);
    if (match.params.id === 'abc') {
        return <h2>Dashboard ABC</h2>
    } else {
        return (
            <div>
                <h2>Dashboard | Yooo!!</h2>
                <button onClick={profile}>Profile</button>
                <button onClick={blog}>Blog</button>
            </div>
        );
    }

    
};

export default Dashboard;