import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import party_cupcakes from "../assets/party_cupcakes.jpg";
import choco_cupcakes from "../assets/choco_cakes.webp";
import weeding_cakes from "../assets/weeding_cakes.webp";


const Offer = () => {

    const offers = [
        {
            title: "CIASTKA IMPREZOWE",
            description: "Oferujemy różnorodne babeczki na każdą imprezę, wykonane z wysokiej jakości naturalnych składników i bez konserwantów.",
            img: party_cupcakes
        },
        {
            title: "CIASTKA CZEKOLADOWE",
            description: "Nic nie smakuje lepiej niż ciasto czekoladowe o różnych smakach, które jest zawsze dostępne w naszej piekarni.",
            img: choco_cupcakes
        },
        {
            title: "CIASTA ŚLUBNE",
            description: "Chcesz, aby Twój ślub był niezapomniany? W takim razie musisz u nas zamówić wyjątkowy tort weselny!",
            img: weeding_cakes
        }
    ];

    const settings = {
        className: "",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };

    return (
        <section className="px-2 py-6 lg:py-12">
            <div className="container mx-auto">
                <h1 className='text-center text-3xl font-bold pb-10 md:text-3xl lg:text-5xl xl:text-6xl'>CO OFERUJEMY</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        {offers.map((offer, index) => (
                            <div className='p-4' key={index}>
                                <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-100 border border-gray-300">
                                    <div className='w-full h-60 flex items-center justify-center'>
                                        <img src={offer.img} className='w-full h-full object-cover' />
                                    </div>
                                    <h1 className='text-xl font-bold mt-4'>{offer.title}</h1>
                                    <p className='mt-2 px-4'>{offer.description}</p>
                                    <button className='mt-4 py-2 px-6 bg-pink-700 text-white rounded-full'>CZYTAJ WIĘCEJ</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Offer;
