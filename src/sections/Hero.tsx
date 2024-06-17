import cakeImage from '../assets/cake-background.jpg';

const Hero = () => {
    return (
        <section className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${cakeImage})` }}>
            <div className='container mx-auto py-20 space-y-6'>
                <h1 className='text-7xl font-bold'>Przepyszne</h1>
                <div className='flex items-center space-x-4'>
                    <div className='w-14 h-1 bg-black'></div>
                    <h3 className='text-4xl font-bold tracking-[.15em]'>CIASTA DLA CIEBIE</h3>
                </div>
                <p className='text-3xl text-slate-600 tracking-[.15em]'>Piekarnia oferuje najlepsze <br /> ciasta i słodkości dla Ciebie.</p>
                <button className='mt-2 px-10 py-5 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'>KUP TERAZ!</button>
            </div>

        </section>
    )
}

export default Hero
