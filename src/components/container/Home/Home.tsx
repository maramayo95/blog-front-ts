import Banner from './Banner'
import Contact from './Contact'
import Feature from './Feature'
import Footer from './Footer'
import Hero from './Hero'
import Information from './Information'
// import Offer from './Offer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Feature/>
        <Information/>
        <Banner/>
        <Contact/>
        <Footer/>
        {/* <Offer/> */}
    </div>
  )
}

export default Home