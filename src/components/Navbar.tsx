import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faCartShopping, faEllipsisVertical, faX } from '@fortawesome/free-solid-svg-icons'


import bakery_logo from "../assets/bakery-logo.png"
import { useState } from 'react'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='flex items-center px-3 justify-between shadow-[0_0_5px_0_rgba(1,3,4,0.19)] relative z-10'>
                <div className="flex items-center">
                    {isOpen ?
                        <FontAwesomeIcon icon={faX} className='h-7 w-7 cursor-pointer' onClick={toggleMenu} />
                        :
                        <FontAwesomeIcon icon={faBars} className='h-7 w-7 cursor-pointer' onClick={toggleMenu} />}
                    <img src={bakery_logo} className='h-16' />
                </div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='h-7' />
                    <FontAwesomeIcon icon={faCartShopping} className='h-7' />
                    <FontAwesomeIcon icon={faEllipsisVertical} className='h-7' />
                </div>
            </div>
            <div className={`absolute top-15 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-4">
                    <ul>
                        <li className="py-2"><a href="#">Home</a></li>
                        <li className="py-2"><a href="#">About</a></li>
                        <li className="py-2"><a href="#">Services</a></li>
                        <li className="py-2"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
