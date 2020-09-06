import React from 'react';
import './Nofound.css';


const Nofund = ({text='Page Not Found! '}) => {
    return (
        <div className='no-found'>
            <p>{text} &#9785;</p>
            <h1>404</h1>
        </div>
    );
};

export default Nofund;