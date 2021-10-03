import React from 'react';
import Maindashboard from './Components/Main/Maindashboard';
import Sidenavebar from './Components/SideBar/Sidenavebar';

const Landing = () => {
    return (
        <section className="container-fluid">
        <div className="row">    
            <Sidenavebar/>
            <Maindashboard/>
        </div>

            
        </section>
    );
};

export default Landing;