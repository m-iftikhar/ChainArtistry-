
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Nftpage from "./pages/Nftpage";
import Nftmintpage from './pages/Nftmintpage'
import Mintdata from "./pages/Mintdata";
import Topcollect from "./pages/Topcollect";
import ViewSeller from "./pages/ViewSeller";
import Auctionpage from "./pages/Auctionpage";

import Chooseexisted from "./pages/Chooseexisted";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nftpage" element={<Nftpage />} />
        <Route path="/nftpagemint" element={<Nftmintpage />} />
        <Route path="/mintdata" element={<Mintdata />} />
        <Route path="/topcollections" element={<Topcollect />} />
        <Route path="/viewseller" element={<ViewSeller />} />
        <Route path="/exploreauctions" element={<Auctionpage />} />
        <Route path="/choosecollection" element={<Chooseexisted/>} />
      </Routes>
    </Router>
  );
};

export default App;
