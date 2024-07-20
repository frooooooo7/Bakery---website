import logo1 from "../assets/LOGOS/1.png"
import logo2 from "../assets/LOGOS/2.png"
import logo3 from "../assets/LOGOS/3.png"
import logo4 from "../assets/LOGOS/4.png"
import logo5 from "../assets/LOGOS/5.png"
import Slider from 'react-slick'
import background from "../assets/LOGOS/background.jpg"


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
};


const Logos = () => {
    return (
        <section className="py-6 lg:py-12">
            <div className="relative w-full py-12 lg:py-20 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
                <div className="container mx-auto max-w-7xl">
                    <Slider {...settings}>
                        <div className="logo mb-5">
                            <div className="flex justify-center items-center">
                                <img src={logo1} className="w-28 h-28 object-contain" />
                            </div>
                        </div>
                        <div className="logo">
                            <div className="flex justify-center items-center ">
                                <img src={logo2} className="w-28 h-28 object-cover" />
                            </div>
                        </div>
                        <div className="logo">
                            <div className="flex justify-center items-center ">
                                <img src={logo3} className="w-28 h-28 object-contain" />
                            </div>
                        </div>
                        <div className="logo">
                            <div className="flex justify-center items-center ">
                                <img src={logo4} className="w-28 h-28 object-contain" />
                            </div>
                        </div>
                        <div className="logo">
                            <div className="flex justify-center items-center ">
                                <img src={logo5} className="w-28 h-28 object-contain" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Logos