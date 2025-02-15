import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import CoreFeatures from "../components/Home/CoreFeatures";
import MeetOurTeam from "../components/Home/MeetOurTeam";
import OpenContactLocation from "../components/Home/OpenContactLocation";
import PopularProducts from "../components/Home/PopularProducts";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div className="bg-gray-400">
      <Banner/>
      <AboutUs />
      <Service />
      <OpenContactLocation />
      <PopularProducts />
      <MeetOurTeam />
      <CoreFeatures/>
      <Testimonial/>
    </div>
  );
};

export default Home;
