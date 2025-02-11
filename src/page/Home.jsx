import AboutUs from "../components/Home/AboutUs";
import CoreFeatures from "../components/Home/CoreFeatures";
import MeetOurTeam from "../components/Home/MeetOurTeam";
import OpenContactLocation from "../components/Home/OpenContactLocation";
import PopularProducts from "../components/Home/PopularProducts";
import Service from "../components/Home/Service";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <Service />
      <OpenContactLocation />
      <PopularProducts />
      <MeetOurTeam />
      <CoreFeatures/>
    </div>
  );
};

export default Home;
