import chef1 from "../../../assets/TEAM/chef.jpg";
import chef2 from "../../../assets/TEAM/chef2.jpg";
import chef3 from "../../../assets/TEAM/chef3.jpg";
import Slider from "react-slick";
import "../../../components/SliderCustom.css";
import Twitter from "../../../assets/svg/Twitter";
import Facebook from "../../../assets/svg/Facebook";
import Instagram from "../../../assets/svg/Instagram";
import Google from "../../../assets/svg/Google";

const chefs = [
    {
        img: chef1,
        name: "Damian",
        desc: "Damian ma prawdziwą pasję do pieczenia i dlatego od samego początku jest naszym założycielem i głównym piekarzem.",
    },
    {
        img: chef2,
        name: "Aleksandra",
        desc: "Aleksandra spędza większość czasu na pieczeniu i dekorowaniu ciast, a także na kierowaniu inicjatywami marketingowymi piekarni.",
    },
    {
        img: chef3,
        name: "Tomasz",
        desc: "Tomasz jest naszym głównym projektantem tortów.  Zaprojektował piękne torty na różne okazje, w tym wesela, przyjęcia, prysznice, rocznice i wiele innych.",
    }
];

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
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
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
};

const Team = () => {
    return (
        <section className="py-6 lg:py-12 relative w-full bg-gray-100">
            <div className="container mx-auto px-2 max-w-7xl">
                <h1 className="text-center pt-10 pb-10 text-3xl font-bold lg:text-5xl xl:text-6xl">NASZA DRUŻYNA</h1>
                <Slider {...settings}>
                    {chefs.map((chef, index) => (
                        <div key={index} className="chef-info">
                            <div className="flex flex-col items-center space-y-3 px-4">
                                <div className="flex items-center justify-center">
                                    <img src={chef.img} className="h-full rounded-full border-8 border-white" />
                                </div>
                                <h2 className="text-center text-xl font-bold tracking-wider">
                                    {chef.name}
                                </h2>
                                <p className="text-center text-gray-600 max-w-80">
                                    {chef.desc}
                                </p>
                                <div className="icons flex justify-center items-center gap-4 pb-10">
                                    <i className="w-5"><Facebook /></i>
                                    <i className="w-5"><Twitter /></i>
                                    <i className="w-5"><Instagram /></i>
                                    <i className="w-5"><Google /></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Team;
