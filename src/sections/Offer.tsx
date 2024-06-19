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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="px-2 pt-10">
            <div className="container mx-auto">
                <h1 className='text-center text-3xl font-bold pb-10'>CO OFERUJEMY</h1>
                <Slider {...settings}>
                    {offers.map((offer, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className='w-full h-80 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg overflow-hidden'>
                                <img src={offer.img} className='w-full h-full object-cover' />
                            </div>
                            <h1 className='text-xl font-bold mt-4'>{offer.title}</h1>
                            <p className='mt-2 px-4'>{offer.description}</p>
                            <button className='mt-4 py-2 px-6 bg-pink-700 text-white rounded-full'>CZYTAJ WIĘCEJ</button>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Offer;
