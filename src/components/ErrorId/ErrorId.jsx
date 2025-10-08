import React from 'react';
import appError from '../../assets/App-Error.png';

const ErrorId = () => {
    return (
        <div className="max-w-[1435px] mx-3 lg:mx-auto">
            <div className=''>
           <img src={appError} alt="" />
            </div>
           <h3>OOPS!! APP NOT FOUND</h3>
           <p>The App you are requesting is not found on our system.  please try another apps</p>
           <button className="btn">Go Back!</button>
        </div>
    );
};

export default ErrorId;