import summerSale from "../assets/summerSale.jpg"

const SummerSale = () => {
    return (
        <section className="relative mt-10 w-full bg-cover bg-center" style={{ backgroundImage: `url(${summerSale})` }}>
            <div className="bg-slate-200 bg-opacity-60 lg:bg-opacity-10 space-y-6 flex flex-col items-center pb-10">
                <h1 className="text-2xl font-bold tracking-wider pt-10">LETNIA WYPRZEDAŻ</h1>
                <div className="flex items-center justify-center gap-5">
                    <h1 className="text-4xl font-bold text-pink-700">-20%</h1>
                    <h2 className="text-xl font-bold">NA WSZYSTKIE CIASTA</h2>
                </div>
                <p className="text-center text-gray-600">Kup nasze smaczne ciasta i słodycze na następną imprezę lub rodzinny obiad w naszym sklepie internetowym i zaoszczędź więcej pieniędzy niż gdziekolwiek indziej.</p>
                <button className='mt-2 px-7 lg:px-10 py-3 lg:py-5 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'>KUP TERAZ!</button>
            </div>
        </section>
    )
}

export default SummerSale
