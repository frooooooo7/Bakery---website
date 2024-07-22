import photo1 from "../assets/GALLERY/1.jpg"
import photo2 from "../assets/GALLERY/2.jpg"
import photo3 from "../assets/GALLERY/3.jpg"
import photo4 from "../assets/GALLERY/4.jpg"
import photo5 from "../assets/GALLERY/5.jpg"
import photo6 from "../assets/GALLERY/6.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Twitter from "../assets/svg/Twitter";
import Facebook from "../assets/svg/Facebook";
import Instagram from "../assets/svg/Instagram";
import Google from "../assets/svg/Google";


const Footer = () => {
    return (
        <section className="px-2 py-6 lg:py-12">
            <div className="container mx-auto">
                <div className="lg:flex lg:justify-center lg:space-x-10 xl:space-x-28">
                    <div className="gallery">
                        <h1 className="text-center lg:text-left tracking-wider py-10 text-xl font-bold">GALERIA</h1>
                        <div className="grid grid-cols-3 gap-3 sm:flex sm:justify-center lg:grid lg:grid-cols-3">
                            <img src={photo1} className="w-full h-full sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-cover" />
                            <img src={photo2} className="w-full h-full sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-cover" />
                            <img src={photo3} className="w-full h-full sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-cover" />
                            <img src={photo4} className="w-full h-full sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-cover" />
                            <img src={photo5} className="w-full h-full sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-cover" />
                            <img src={photo6} className="w-full h-full sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-cover" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-2 xl:gap-x-16">
                        <div className="links">
                            <h1 className="text-center lg:text-left tracking-wider py-10 text-xl font-bold">SZYBKIE LINKI</h1>
                            <div className="sm:flex sm:flex-col sm:items-center">
                                <ol className="grid grid-cols-2 gap-3 sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-x-14">
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">O Nas</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Nasza Drużyna</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Sklep</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Ceny</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">FAQ</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Skontaktuj Się</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Co Oferujemy</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Opinie</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Szkoła Pieczenia</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-gray-400 h-[2px] w-3 inline-block mr-2"></span>
                                        <a href="">Nasze Przepisy</a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="in_touch flex flex-col items-center">
                            <h1 className="text-center lg:text-left tracking-wider pb-10 text-xl font-bold py-10">SKONTAKTUJ SIĘ Z NAMI</h1>
                            <div>
                                <div className="flex flex-col text-center mb-5 md:flex-row md:gap-5">
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f72293", }}></FontAwesomeIcon>
                                    <h1>Zygmunta Krasińskiego 55a <br></br>38-200 Jasło</h1>
                                </div>
                                <div className="flex flex-col items-center text-center mb-5 md:flex-row md:gap-5">
                                    <FontAwesomeIcon icon={faPhone} style={{ color: "#f72293", }}></FontAwesomeIcon>
                                    <h1>+49 123 123 123</h1>
                                </div>
                                <div className="flex flex-col items-center text-center mb-5 md:flex-row md:gap-5">
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f72293", }}></FontAwesomeIcon>
                                    <h1>sweet_bakery@gmail.com</h1>
                                </div>
                                <div className="icons flex justify-center items-center gap-4">
                                    <i className="w-10"><Facebook /></i>
                                    <i className="w-10"><Twitter /></i>
                                    <i className="w-10"><Instagram /></i>
                                    <i className="w-10"><Google /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
