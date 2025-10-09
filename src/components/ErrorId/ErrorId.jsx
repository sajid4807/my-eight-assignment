import { NavLink } from 'react-router';
import appError from '../../assets/App-Error.png';

const ErrorId = () => {
    return (
        <div className="max-w-[1435px] my-20 mx-3 lg:mx-auto">
            <div className='flex justify-center'>
           <img src={appError} alt="" />
            </div>
           <div className='text-center  mt-16'>
            <h3 className='text-[#001931] font-semibold text-5xl'>OOPS!! APP NOT FOUND</h3>
           <p className='text-[#627382] text-xl mt-3 mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
           <NavLink to="/">
            <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">Go Back!</button>
           </NavLink>
           </div>
        </div>
    );
};

export default ErrorId;