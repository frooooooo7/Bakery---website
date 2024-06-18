import cakeImage from '../assets/cake-background.jpg';

const Hero = () => {
    return (
        <section className="relative w-full bg-cover bg-center bg-opacity-40 lg:bg-opacity-100" style={{ backgroundImage: `url(${cakeImage})` }}>
            <div className='absolute inset-0 bg-white opacity-50 lg:opacity-100'></div>
            <div className='relative z-10 container mx-auto py-20 space-y-6 pl-3'>
                <h1 className='text-5xl lg:text-7xl font-bold'>Przepyszne</h1>
                <div className='flex items-center space-x-4'>
                    <div className='w-14 h-1 bg-black'></div>
                    <h3 className='text-xl lg:text-4xl font-bold tracking-[.15em]'>CIASTA DLA CIEBIE</h3>
                </div>
                <p className='text-xl lg:text-3xl text-slate-600 tracking-[.15em]'>Piekarnia oferuje najlepsze <br /> ciasta i słodkości dla Ciebie.</p>
                <button className='mt-2 px-7 lg:px-10 py-3 lg:py-5 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'>KUP TERAZ!</button>
            </div>

        </section>
    )
}

export default Hero
