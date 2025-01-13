
import Nfthero from "../components/Nfthero";
import Nftcards from '../components/Nftcards'
import Footer from "../components/Footer";

const Nftpage = () => {
  return (
    <div className="w-full h-full">
      <Nfthero />
      {/* <Collectioncard /> */}
      <Nftcards/>
      <Footer />
    </div>
  );
};

export default Nftpage;
