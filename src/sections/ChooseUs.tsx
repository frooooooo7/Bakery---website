import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faTruck, faFan, faCreditCard } from '@fortawesome/free-solid-svg-icons'

const ChooseUs = () => {
    return (
        <section className="px-2">
            <div className="container mx-auto mt-10">
                <h1 className="text-center text-3xl font-bold">WHY CHOOSE US</h1>
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
        </section>
    )
}

export default ChooseUs
