import { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const renderContent = () => {
        switch (activeTab) {
            case 'mission':
                return (
                    <>
                        <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-center leading-tight sm:text-left sm:ml-36">dostarczanie wysokiej jakości wypieków dla wszystkich klientów</h2>
                        <p className='text-center tracking-wider text-xs sm:text-left sm:ml-36'>
                            Naszą misją jest stworzenie piekarni, która produkuje najwyższej jakości wypieki na miejscu od podstaw, w której zarówno pracownicy, jak i klienci czuliby się komfortowo.
                        </p>
                    </>
                );
            case 'values':
                return (
                    <>
                        <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-center leading-tight sm:text-left sm:ml-36">Zapewnienie najlepszej atmosfery dla wszystkich</h2>
                        <p className='text-center tracking-wider text-xs sm:ml-36'>
                            Uważamy, że najważniejszą częścią naszej działalności jest zapewnienie szczęścia naszym pracownikom i zadowolenia naszych klientów poprzez tworzenie przyjaznej i troskliwej atmosfery.
                        </p>
                    </>
                );
            case 'goals':
                return (
                    <>
                        <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-center leading-tight sm:text-left sm:ml-36">Serwujemy wyłącznie najświeższe i najsmaczniejsze wypieki</h2>
                        <p className='text-center tracking-wider text-xs sm:ml-36'>
                            Naszym celem jest dostarczanie najlepszych wypieków na imprezy firmowe i indywidualne uroczystości, oferując jednocześnie najlepszy poziom obsługi klienta w Stanach Zjednoczonych.
                        </p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg w-full px-2 sm:hidden">
                <div className='mb-5'>
                    {renderContent()}
                </div>
                <div className='p-3 bg-gray-200'>
                    <div className="flex flex-col justify-between mb-4 tracking-wider font-bold">
                        <button
                            className={`flex-1 py-2 px-4 text-center ${activeTab === 'mission' ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('mission')}
                        >
                            NASZA MISJA
                        </button>
                        <button
                            className={`flex-1 py-2 px-4 text-center ${activeTab === 'values' ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('values')}
                        >
                            NASZE WARTOŚCI
                        </button>
                        <button
                            className={`flex-1 py-2 px-4 text-center  ${activeTab === 'goals' ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('goals')}
                        >
                            NASZE CELE
                        </button>
                    </div>
                </div>
            </div>

            <div className='hidden sm:block w-full px-2'>
                <div className='mb-40 relative'>
                    <div className='absolute left-0 top-0 border-[1rem] border-slate-900 opacity-10 w-80 h-60 z-10'></div>
                    <div className='pt-16 z-50'>
                        {renderContent()}
                    </div>
                </div>
                <div className='bg-gray-200 mb-5'>
                    <div className="flex justify-between mb-4 tracking-wider font-bold relative">
                        <button
                            className={`flex-1 py-8 px-4 text-center relative ${activeTab === 'mission' ? 'text-pink-600 ' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('mission')}
                        >
                            <span className={`absolute inset-0 flex items-center justify-center text-6xl font-normal z-0 ${activeTab === 'mission' ? 'text-pink-600 opacity-20' : 'text-gray-300'
                                }`}>01</span>
                            <div className="relative z-10">NASZA MISJA</div>
                        </button>
                        <button
                            className={`flex-1 py-8 px-4 text-center relative ${activeTab === 'values' ? 'text-pink-600' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('values')}
                        >
                            <span className={`absolute inset-0 flex items-center justify-center text-6xl font-normal z-0 ${activeTab === 'values' ? 'text-pink-600 opacity-20 ' : 'text-gray-300'
                                }`}>02</span>
                            <div className="relative z-10">NASZE WARTOŚCI</div>
                        </button>
                        <button
                            className={`flex-1 py-8 px-4 text-center relative ${activeTab === 'goals' ? 'text-pink-600' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('goals')}
                        >
                            <span className={`absolute inset-0 flex items-center justify-center text-6xl font-normal z-0 ${activeTab === 'goals' ? 'text-pink-600 opacity-20 ' : 'text-gray-300'
                                }`}>03</span>
                            <div className="relative z-10">NASZE CELE</div>
                        </button>
                    </div>


                </div>
            </div>


        </>
    );
};

export default TabComponent;
