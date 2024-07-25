import cakes from "../../../assets/promo-cakes.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Promo = () => {
    return (
        <section className="px-2 relative">
            <div className="container mx-auto mt-5 border-8 border-slate-100 rounded-lg overflow-hidden bg-cover bg-center max-w-full md:max-w-screen-md md:-mt-16 lg:max-w-screen-lg" style={{ backgroundImage: `url(${cakes})` }}>
                <div className="relative px-8 py-8 md:px-40 lg:pb-14 bg-slate-200 bg-opacity-80 flex flex-col items-center space-y-5">
                    <h1 className="text-2xl font-bold text-pink-700 lg:text-4xl">Tylko Świeże Ciasta!</h1>
                    <p className="text-slate-600 tracking-wider text-center lg:text-xl">
                        Wszystkie nasze produkty są wytwarzane od podstaw przy użyciu rodzinnych receptur z wykorzystaniem wyłącznie najwyższej jakości składników. Pieczemy i sprzedajemy świeże produkty codziennie, aby zapewnić, że tylko najlepsze produkty są sprzedawane naszym klientom.
                    </p>
                    <button className="w-12 h-12 bg-pink-700 text-white rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Promo
