import { NavLink } from 'react-router';
import error from '../../assets/error-404.png';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';
const ErrorPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1435px] lg:my-20 mx-3 lg:mx-auto'>
            <div className='flex justify-center'>
            <img src={error} alt="" />
            </div>
            <div className='text-center mt-20'>
                <h3 className='text-5xl font-semibold text-[#001931]'>Oops, page not found!</h3>
            <p className='text-[#627382] text-xl mt-3 mb-4'>The page you are looking for is not available.</p>
            <NavLink to="/">
                <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">Go Back!</button>
            </NavLink>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPages;