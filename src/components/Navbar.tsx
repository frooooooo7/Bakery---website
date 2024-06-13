import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faCartShopping, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'


import bakery_logo from "../assets/bakery-logo.png"


const Navbar = () => {
    return (
        <div className='flex items-center px-3 justify-between shadow-[0_0_5px_0_rgba(1,3,4,0.19)]'>
            <div className="navbar-left flex items-center">
                <FontAwesomeIcon icon={faBars} className='h-7' />
                <img src={bakery_logo} className='h-16' />
            </div>
            <div className="navbar-right flex items-center gap-3">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='h-7'/>
                <FontAwesomeIcon icon={faCartShopping} className='h-7'/>
                <FontAwesomeIcon icon={faEllipsisVertical} className='h-7'/>
            </div>
        </div>
    )
}

export default Navbar
