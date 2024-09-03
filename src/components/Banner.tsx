import shopBackground from "../assets/shop.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface BannerProps {
    title: string;
}

const Banner = ({ title }: BannerProps) => {

    return (
        <section>
            <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${shopBackground})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center font-bold py-10 sm:py-12 md:py-24 lg:py-32 xl:py-48">{title}</h1>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-4 py-4">
                <h1 className="text-sm text-gray-400 font-bold tracking-wider">STRONA GŁÓWNA</h1>
                <FontAwesomeIcon icon={faArrowRight}/>
                <h1 className="text-sm text-gray-600 font-bold tracking-wider">{title}</h1>
            </div>
        </section>
    )
}

export default Banner
