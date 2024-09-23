import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faEllipsisVertical, faX, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import bakery_logo from "../assets/bakery-logo.png"
import { useContext, useState } from 'react'
import "../styles/ButtonFun.css"
import Cart from './Cart'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { CartContext } from '../contexts/CartContext'


const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isLoc, setIsLoc] = useState(false);
    const [isCartOpened, setIsCartOpened] = useState(false);

    const context = useContext(CartContext)
    if (!context) return null
    const { cart } = context

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    const toggleLoc = () => {
        setIsLoc(!isLoc)
    }

    const toggleCart = () => {
        setIsCartOpened(!isCartOpened)
    }



    return (
        <header>
            {/* Desktop Navbar */}
            <div className='w-full shadow-[0_0_5px_0_rgba(1,3,4,0.19)]'>
                <div className='container mx-auto hidden lg:flex items-center px-3 py-3 justify-between relative z-50'>
                    <div className='flex'>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#be185d", }} className='h-9 w-9 mr-2' />
                        </div>
                        <div className='hover:text-[#be185d] transition duration-300 cursor-pointer'>
                            <p className='font-bold'>Zygmunta Krasińskiego 55a</p>
                            <p>38-200 Jasło</p>
                        </div>
                    </div>
                    <div className='cursor-pointer' onClick={() => navigate("/")}>
                        <img src={bakery_logo} className='h-16 xl:h-20 transition duration-300 ease-in-out hover:scale-105' />
                    </div>
                    <div>
                        <button className='button material-bubble flex items-center justify-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='w-4 h-4' />
                            Skontaktuj się
                        </button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto hidden lg:flex justify-between items-center px-3 py-3'>
                <nav className="navigation">
                    <ul className="menu">
                        <li className="li">
                            <Link to={"/"}>Strona Główna</Link>
                        </li>
                        <li className="li">
                            <Link to={"/sklep"}>Sklep</Link>
                        </li>
                        <li className="li">
                            <Link to={""}>Oferty</Link>
                        </li>
                        <li className="li">
                            <Link to={""}>Galeria</Link>
                        </li>
                        <li className="li">
                            <Link to={""}>Skontaktuj się</Link>
                        </li>
                    </ul>
                </nav>
                <div className='relative'>
                    <FontAwesomeIcon icon={faCartShopping} className='h-7 w-7 xl:h-9 xl:w-9' onClick={toggleCart} />
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-4  text-[#be185d] font-bold flex items-center justify-center text-sm">
                            {cart.length}
                        </span>
                    )}
                    <Cart isCartOpened={isCartOpened} />
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='relative z-50 w-full flex lg:hidden items-center px-3 justify-between shadow-[0_0_5px_0_rgba(1,3,4,0.19)]'>
                <div className="flex items-center">
                    {isOpenMenu ?
                        <FontAwesomeIcon icon={faX} className='h-7 w-7 cursor-pointer' onClick={toggleMenu} />
                        :
                        <FontAwesomeIcon icon={faBars} className='h-7 w-7 cursor-pointer' onClick={toggleMenu} />}
                    <img src={bakery_logo} className='h-16' />
                </div>
                <div className="flex items-center relative">
                    <FontAwesomeIcon icon={faCartShopping} className='h-7' />
                    <FontAwesomeIcon icon={faEllipsisVertical} className='h-7 ml-3' onClick={toggleLoc} />
                    <div className={`absolute top-12 right-0 bg-white shadow-lg p-4 rounded-lg w-72 flex transition-transform duration-300 ease-in-out ${isLoc ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'}`}>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f72293", }} className='h-9 w-9 mr-2' />
                        </div>
                        <div>
                            <p className='font-bold'>Zygmunta Krasińskiego 55a</p>
                            <p>38-200 Jasło</p>
                            <button className='mt-2 px-4 py-2 bg-white text-black border-2 border-pink-500 rounded-lg font-bold active:bg-pink-500 active:text-white'>Get in Touch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute z-40 top-15 left-0 h-full w-64 bg-white shadow-lg transform ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-4 ">
                    <ul>
                        <li className="py-2"><a href="#">Home</a></li>
                        <li className="py-2"><a href="#">About</a></li>
                        <li className="py-2"><a href="#">Services</a></li>
                        <li className="py-2"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Navbar
