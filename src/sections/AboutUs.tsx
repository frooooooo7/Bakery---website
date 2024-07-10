import aboutUs from "../assets/aboutUs.jpg"
import TabComponent from "../components/TabComponent"

const AboutUs = () => {
  return (
    <section className="px-2">
        <div className="container mx-auto mt-10">
            <h1 className="text-center text-3xl font-bold mb-10">O NAS</h1>
            <div className="mb-8 flex justify-center">
                <img src={aboutUs} className="w-full h-full object-cover min-[580px]:max-w-80"/>
            </div>
            <TabComponent/>
        </div>
    </section>
  )
}

export default AboutUs
