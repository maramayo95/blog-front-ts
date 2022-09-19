import Contact from '../../single/Contact'
import Feature from '../../single/Feature'
import Footer from '../../single/Footer'
import Hero from '../../single/Hero'
import Information from '../../single/Information'
import InformationTwo from '../../single/InformationTwo'
import Testimonial from '../../single/Testimonial'
// import Offer from './Offer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Information/>
        <InformationTwo/>
        <Feature/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        {/* <Offer/> */}
    </div>
  )
}

export default Home