import Featurecollection from "../components/Featurecollection";
// import Hero from "../components/Hero";
import TopSeller from "../components/TopSeller";
import Trendings from "../components/Trendings";
import Auction from '../components/Auction';
import TopCollections from "../components/TopCollection";
import Recentlysold from "../components/Recentlysold";
// import DigitalAsset from '../components/DigitalAsset'
import Boost from "../components/Boost"
import Questions from '../components/Questions'
import Footer from "../components/Footer";
import Herotitle from "../components/Herotitle";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pink-200 min-h-screen">
      <Herotitle/>
      {/* <Hero /> */}
      <Featurecollection/>
      <Trendings title="Trending NFTs"/>
      <TopSeller/>
      <Auction title="Auctions"/>
      <TopCollections/>
      <Recentlysold/>
      {/* <DigitalAsset/> */}
      <Boost/>
      <Questions/>
      <Footer/>
    </div>
  );
};

export default Home;
