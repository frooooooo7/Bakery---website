import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faTruck, faFan, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import strawberries from '../assets/strawberries.jpg'

const ChooseUs = () => {
    return (
        <section className="px-2 py-6 lg:py-12">
            <div className="container mx-auto mt-10">
                <h1 className="text-center text-3xl font-bold md:text-3xl lg:text-5xl xl:text-6xl">DLACZEGO MY?</h1>

                {/*MOBILE LOOK*/}
                <div className='grid md:grid-cols-2 gap-2 lg:hidden'>
                    <div className='flex flex-col items-center mt-10 space-y-3'>
                        <FontAwesomeIcon icon={faCakeCandles} className='text-7xl text-pink-700'></FontAwesomeIcon>
                        <h1 className='text-lg font-bold tracking-wider'>PRODUKTY WYSOKIEJ JAKOŚCI</h1>
                        <p className='text-center text-gray-600 text-sm'>Gwarantujemy jakość wszystkich oferowanych przez nas ciast, ponieważ są one pieczone przy użyciu najświeższych składników.</p>
                    </div>
                    <div className='flex flex-col items-center mt-10 space-y-3'>
                        <FontAwesomeIcon icon={faTruck} className='text-7xl text-pink-700'></FontAwesomeIcon>
                        <h1 className='text-lg font-bold tracking-wider'>DARMOWA DOSTAWA</h1>
                        <p className='text-center text-gray-600 text-sm'>Wszystkie zamówienia złożone przez naszych klientów z Polski są dostarczane bezpłatnie na terenie całej Polski</p>
                    </div>
                    <div className='flex flex-col items-center mt-10 space-y-3'>
                        <FontAwesomeIcon icon={faFan} className='text-7xl text-pink-700'></FontAwesomeIcon>
                        <h1 className='text-lg font-bold tracking-wider'>USŁUGI CATERINGOWE</h1>
                        <p className='text-center text-gray-600 text-sm'>Nasza piekarnia świadczy również wyjątkowe usługi cateringowe na imprezy i specjalne okazje.</p>
                    </div>
                    <div className='flex flex-col items-center mt-10 space-y-3'>
                        <FontAwesomeIcon icon={faCreditCard} className='text-7xl text-pink-700'></FontAwesomeIcon>
                        <h1 className='text-lg font-bold tracking-wider'>PŁATNOŚCI ONLINE</h1>
                        <p className='text-center text-gray-600 text-sm'>Akceptujemy wszystkie rodzaje płatności online, w tym karty kredytowe Visa oraz MasterCard</p>
                    </div>
                </div>

                {/*LARGE SCREENS LOOK */}
                <div className='hidden lg:block mt-10'>
                    <div className='grid grid-cols-custom place-items-center'>
                        <div className='flex flex-col'>
                            <div className='flex border-b border-slate-200 pt-10'>
                                <div className='flex flex-col space-y-3 mr-6 mb-10'>
                                    <h1 className='text-lg font-bold tracking-wider text-right'>PRODUKTY WYSOKIEJ JAKOŚCI</h1>
                                    <p className='text-right text-gray-600 text-sm'>Gwarantujemy jakość wszystkich oferowanych przez nas ciast, ponieważ są one pieczone przy użyciu najświeższych składników.</p>
                                </div>
                                <FontAwesomeIcon icon={faCakeCandles} className='text-6xl text-pink-700'></FontAwesomeIcon>
                            </div>
                            <div className='flex mt-10'>
                                <div className='flex flex-col space-y-3 mr-6 mb-10'>
                                    <h1 className='text-lg font-bold tracking-wider text-right'>DARMOWA DOSTAWA</h1>
                                    <p className='text-right text-gray-600 text-sm'>Wszystkie zamówienia złożone przez naszych klientów z Polski są dostarczane bezpłatnie na terenie całej Polski</p>
                                </div>
                                <FontAwesomeIcon icon={faTruck} className='text-6xl text-pink-700'></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={strawberries} className='h-20' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex border-b border-slate-200 pt-10'>
                            <FontAwesomeIcon icon={faFan} className='text-6xl text-pink-700'></FontAwesomeIcon>
                                <div className='flex flex-col space-y-3 ml-6 mb-10'>
                                    <h1 className='text-lg font-bold tracking-wider text-left'>USŁUGI CATERINGOWE</h1>
                                    <p className='text-left text-gray-600 text-sm'>Nasza piekarnia świadczy również wyjątkowe usługi cateringowe na imprezy <br></br>i specjalne okazje.</p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                            <FontAwesomeIcon icon={faCreditCard} className='text-6xl text-pink-700'></FontAwesomeIcon>
                                <div className='flex flex-col space-y-3 ml-6 mb-10'>
                                    <h1 className='text-lg font-bold tracking-wider text-left'>PŁATNOŚCI ONLINE</h1>
                                    <p className='text-left text-gray-600 text-sm'>Akceptujemy wszystkie rodzaje płatności online, w tym karty kredytowe <br></br>Visa oraz MasterCard.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs
