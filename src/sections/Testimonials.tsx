import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import client1 from "../assets/TESTIMONIAL/1.jpg"
import client2 from "../assets/TESTIMONIAL/2.jpg"
import client3 from "../assets/TESTIMONIAL/3.jpg"
import client4 from "../assets/TESTIMONIAL/4.jpg"
import Slider from 'react-slick'

const testimonials = [
    {
        name: "Patryk",
        avatar: client1,
        desc: "Dziękuję bardzo za eleganckie babeczki. Wyglądały i smakowały niesamowicie. Polecam wszystkim moim znajomym.",
        role: "Klient",
    },
    {
        name: "Julia",
        avatar: client2,
        desc: "Chciałam tylko powiedzieć, jak wspaniały był wasz tort weselny. Wielu gości komentowało, jak pysznie smakował.",
        role: "Klient",
    },
    {
        name: "Tomasz",
        avatar: client3,
        desc: "Jeśli szukasz pyszności w ustach, zdecydowanie powinieneś spróbować produktów ze Słodkiej Piekarni.",
        role: "Klient",
    },
    {
        name: "Helena",
        avatar: client4,
        desc: "Ta piekarnia była świetna do współpracy i będę z niej korzystać podczas moich przyszłych wydarzeń. Ich babeczki smakowały absolutnie zachwycająco.",
        role: "Klient",
    },
];

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]
};


const Testimonials = () => {
    return (
        <section className="px-2 py-10">
            <div className="container mx-auto">
                <h1 className='text-center text-2xl font-bold pb-10 md:text-3xl lg:text-5xl xl:text-6xl'>OPINIE KLIENTÓW</h1>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='testimonial'>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col items-center text-center border-b border-gray-300 max-w-[500px] md:flex-row md:items-start md:text-left md:space-x-5'>
                                    <FontAwesomeIcon className='text-3xl text-pink-700 opacity-50' icon={faQuoteRight}></FontAwesomeIcon>
                                    <p className='pb-5 text-gray-600 tracking-wide lg:text-xl'>{testimonial.desc}</p>
                                </div>
                                <div className='flex flex-col items-center pt-5 md:flex-row md:space-x-4 w-[500px]'>
                                    <img src={testimonial.avatar} className='w-16 border rounded-full mb-2' />
                                    <div className='flex flex-col items-center md:items-start'>
                                        <h1 className='text-sm font-bold tracking-wider'>{testimonial.name}</h1>
                                        <h1 className='text-sm text-pink-700'>{testimonial.role}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Testimonials
