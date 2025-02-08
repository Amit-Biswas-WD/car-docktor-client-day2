import AboutUs from "../components/Home/AboutUs"
import MeetOurTeam from "../components/Home/MeetOurTeam"
import PopularProducts from "../components/Home/PopularProducts"
import Service from "../components/Home/Service"

const Home = () => {
  return (
    <div>
        <AboutUs/>
        <Service/>
        <PopularProducts/>
        <MeetOurTeam/>
    </div>
  )
}

export default Home