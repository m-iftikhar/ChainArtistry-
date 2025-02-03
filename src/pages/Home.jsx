import Featurecollection from "../components/Featurecollection";
import Hero from "../components/Hero";
import TopSeller from "../components/TopSeller";
import Trendings from "../components/Trendings";
import Auction from '../components/Auction';
import TopCollections from "../components/TopCollection";
import Recentlysold from "../components/Recentlysold";

import Boost from "../components/Boost"
import Questions from '../components/Questions'
import Footer from "../components/Footer";
import Herotitle from "../components/Herotitle";
import Digital2 from "../components/Digital2";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pink-100 min-h-screen">
      <Herotitle/>
      <Hero />
      <Featurecollection/>
      <Trendings title="Trending NFT's"/>
      <TopSeller/>
      <Auction title="Auctions"/>
      <TopCollections/>
      <Recentlysold/>
      <Digital2/>
      
      <Boost/>
      <Questions/>
      <Footer/>
    </div>
  );
};

export default Home;
