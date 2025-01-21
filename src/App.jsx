
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Nftpage from "./pages/Nftpage";
import Nftmintpage from './pages/Nftmintpage'
import Mintdata from "./pages/Mintdata";
import Topcollect from "./pages/Topcollect";
import ViewSeller from "./pages/ViewSeller";
import Auctionpage from "./pages/Auctionpage";
import Boost from "./pages/Boost";
import Chooseexisted from "./pages/Chooseexisted";
import Newcollection from "./pages/Newcollection";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Sellmethod from "./pages/Sellmethod";
import Jacobjones from "./pages/Jacobjones";
import Explore from "./pages/Explore";

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
        <Route path="/newcollection" element={<Newcollection/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/sellmethod" element={<Sellmethod/>} />
        <Route path="/boostpage" element={<Boost/>} />
        <Route path="/jacobjones" element={<Jacobjones/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </Router>
  );
};

export default App;
