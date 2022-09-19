import Contact from '../../Contact'
import Feature from '../../Feature'
import Footer from '../../Footer'
import Hero from '../../Hero'
import Information from '../../Information'
import InformationTwo from '../../InformationTwo'
import Testimonial from '../../Testimonial'
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