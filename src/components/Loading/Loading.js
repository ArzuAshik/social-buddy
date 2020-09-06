import React from 'react';
import './Loading.css';
import logo from './Loading.svg'

const Loading = () => {
    return (
        <div className='loading'>
            <img src={logo} alt="Loading..."/>
        </div>
    );
};

export default Loading;