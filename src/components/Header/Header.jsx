import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className='bg-slate-50'>
            <nav className='flex items-center flex-wrap  justify-around h-24 '>
                <Link to='/'><h1 className='text-3xl font-bold'>JobPortal</h1></Link>
                <div className='flex flex-wrap gap-8'>

                    <ul>
                        <li className='flex flex-wrap'>
                            <NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-300 mx-3 " : "mx-3 "
                             }>Home</NavLink>
                            <NavLink to='statistics' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-300 mx-3 " : "mx-3 "
                             }>Statistics</NavLink>
                            <NavLink to='appliedjob' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-300 mx-3 " : "mx-3 "
                             }>Applied jobs</NavLink>
                            <NavLink to='blog' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-300 mx-3 " : "mx-3 "
                             }>Blog </NavLink>
                        </li>
                    </ul>

                </div>
                <div>
                    <button className='px-4 text-white py-2 bg-gradient-to-r from-slate-400 to-indigo-400 rounded'>Star Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
