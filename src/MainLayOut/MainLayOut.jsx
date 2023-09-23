import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Nav-Section/Navbar/Navbar';
import { useEffect } from 'react';

const MainLayOut = () => {
    const loc = useLocation()
    console.log(loc)
    useEffect(() => {
       if(loc.pathname === "/"){
        document.title =`Phone-home`
       }
       else{
        document.title =`Phone ${loc.pathname.replace('/','-')}`
       }
       if(loc.state){
        document.title =`Phone-${loc.state}`
       }
    }, [loc.pathname])
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className="py-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;