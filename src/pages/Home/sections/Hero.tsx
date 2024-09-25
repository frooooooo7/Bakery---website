import cakeImage from '../../../assets/cake-background.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${cakeImage})` }}>
            <div className="absolute inset-0 bg-white bg-opacity-50 lg:bg-opacity-10"></div>
            <div className='relative z-10 container mx-auto py-20 lg:py-40 space-y-6 pl-3'>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='text-5xl lg:text-7xl font-bold text-pink-700'
                >
                    Przepyszne
                </motion.h1>
                <div className='flex items-center space-x-4'>
                    <div className='w-14 h-1 bg-black'></div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                        className='text-xl lg:text-4xl font-bold tracking-[.15em]'
                    >
                        CIASTA DLA CIEBIE
                    </motion.h3>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                    className='text-xl lg:text-3xl text-slate-600 tracking-[.15em]'
                >
                    Piekarnia oferuje najlepsze <br /> ciasta i słodkości dla Ciebie.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                    className='mt-2 px-7 lg:px-10 py-3 lg:py-5 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'
                >
                    KUP TERAZ!
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;