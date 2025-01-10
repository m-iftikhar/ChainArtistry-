import Featurecollection from "../components/Featurecollection";
import Hero from "../components/Hero";
import Trendings from "../components/Trendings";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pink-100 min-h-screen">
      <Hero />
      <Featurecollection/>
      <Trendings/>
    </div>
  );
};

export default Home;
