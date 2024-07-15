import offer2 from "../assets/offer2.jpg"

const Offer2 = () => {
  return (
    <section className="relative mt-10 w-full bg-cover bg-center" style={{backgroundImage: `url(${offer2})`}}>
        <div className="container mx-auto flex flex-col items-center space-y-5 py-10 md:py-24 md:space-y-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-pink-700 font-bold">Unikalne smaki i świeże składniki</h1>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">WSZYSTKIE RODZAJE CIAST</h1>
            <button className='px-7 lg:px-10 py-3 lg:py-5 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'>CZYTAJ WIECEJ</button>
        </div>
    </section>
  )
}

export default Offer2
