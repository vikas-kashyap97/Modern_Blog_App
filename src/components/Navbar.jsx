import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaDribbble, FaBars     } from 'react-icons/fa';
import { FaXTwitter, FaX } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    } 
    // navItmes
    const navItems = [
        {path: "/", Link: "Home"},
        {path: "/about", Link: "About"},
        {path: "/blogs", Link: "Blogs"},
        {path: "/contact", Link: "Contact"},
        {path: "/services", Link: "Services"}
    ]

     //modal details
     const openModal = () => {
        setIsModalOpen(true);
     }

     const closeModal = () => {
        setIsModalOpen(false);
     }



  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href='/' className='text-xl font-bold text-orange-400'>30<span className='text-white'>dayscoding</span></a>

            {/*navItems for lg */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path,Link}) => <li className='text-white' key={path}>
                        <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{Link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href='/' className='hover:text-orange-400'><FaLinkedinIn /></a>
                <a href='/' className='hover:text-orange-400'><FaDribbble  /></a>
                <a href='/' className='hover:text-orange-400'><FaXTwitter /></a>
                <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log In</button>
            </div>

            {/* Our modal component is here*/}
            <Modal isOpen={isModalOpen} onClose={closeModal}/>

            {/* mobile menu btn, display on the mobile only */ }
            <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer'>
                {
                    isMenuOpen ? <FaX className='w-5 h-5' /> : <FaBars className='w-5 h-5' />

                }
                </button>
            </div>
        </nav>
        {/* menu items only for mobiles */}
        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>

                {
                    navItems.map(({path,Link}) => <li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{Link}</NavLink>
                    </li>)
                }
            </ul>
        </div>

    </header>
  )
}

export default Navbar