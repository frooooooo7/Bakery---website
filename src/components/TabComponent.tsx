import { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const renderContent = () => {
        switch (activeTab) {
            case 'mission':
                return (
                    <>
                        <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-center leading-tight">dostarczanie wysokiej jakości wypieków dla wszystkich klientów</h2>
                        <p className='text-center tracking-wider text-xs'>
                            Naszą misją jest stworzenie piekarni, która produkuje najwyższej jakości wypieki na miejscu od podstaw, w której zarówno pracownicy, jak i klienci czuliby się komfortowo.
                        </p>
                    </>
                );
            case 'values':
                return (
                    <>
                        <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-center leading-tight">Zapewnienie najlepszej atmosfery dla wszystkich</h2>
                        <p className='text-center tracking-wider text-xs'>
                            Uważamy, że najważniejszą częścią naszej działalności jest zapewnienie szczęścia naszym pracownikom i zadowolenia naszych klientów poprzez tworzenie przyjaznej i troskliwej atmosfery.
                        </p>
                    </>
                );
            case 'goals':
                return (
                    <>
                        <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-center leading-tight">Serwujemy wyłącznie najświeższe wypieki</h2>
                        <p className='text-center tracking-wider text-xs'>
                            Naszym celem jest dostarczanie najlepszych wypieków na imprezy firmowe i indywidualne uroczystości, oferując jednocześnie najlepszy poziom obsługi klienta w Stanach Zjednoczonych.
                        </p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md px-2">
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
    );
};

export default TabComponent;
