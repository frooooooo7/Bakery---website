import aboutUs from "../assets/aboutUs.jpg"
import TabComponent from "../components/TabComponent"

const AboutUs = () => {
  return (
    <section className="px-2">
      <div className="container mx-auto mt-10">
        <h1 className="text-center text-3xl font-bold mb-10 lg:text-5xl xl:text-6xl">O NAS</h1>
        <div className="block lg:flex lg:gap-5">
          <div className="mb-8 flex justify-center flex-1">
            <img src={aboutUs} className="w-full h-full object-cover min-[580px]:max-w-80 lg:max-w-xl shadow-xl" />
          </div>
          <div className="flex-1">
            <TabComponent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
