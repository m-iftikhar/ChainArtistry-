import Auctionhero from "../components/Auctionhero"
import Auctionpagecards from "../components/Auctionpagecards"
import Footer from "../components/Footer"

const Auctionpage = () => {
  return (
    <div>
        <Auctionhero/>
      <Auctionpagecards title="Top listed Auctions"/>
      <Auctionpagecards title="Live Auctions"/>
        <Footer/>
    </div>
  )
}

export default Auctionpage