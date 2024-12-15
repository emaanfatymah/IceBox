import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import HomePage from "./pages/Home";
import MenPage from "./pages/Men";
import WomenPage from "./pages/Women";
import GoldChainsPage from "./pages/GoldChains";
import EngagementPage from "./pages/Engagement";
import TravelCasesPage from "./pages/TravelCases";
import WatchesPage from "./pages/Watches";
import CustomPage from "./pages/Custom";
import OrderPage from "./pages/Order";
import RingsDetailPage from "./pages/RingsDetail";
import NecklaceDetailPage from "./pages/NecklaceDetail";
import WatchesDetailPage from "./pages/WatchesDetail";
import BraceletDetailPage from "./pages/BraceletDetail";
import PendantDetailPage from "./pages/PendantDetail";
import GoldChainsDetailPage from "./pages/GoldChainsDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/goldchains" element={<GoldChainsPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/travelcases" element={<TravelCasesPage />} />
          <Route path="/watches" element={<WatchesPage />} />
          <Route path="/custom" element={<CustomPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route
            path="/productdetails/RINGS/:id"
            element={<RingsDetailPage />}
          />
          <Route
            path="/productdetails/NECKLACES/:id"
            element={<NecklaceDetailPage />}
          />
          <Route
            path="/productdetails/WATCHES/:id"
            element={<WatchesDetailPage />}
          />
          <Route
            path="/productdetails/BRACELETS/:id"
            element={<BraceletDetailPage />}
          />
          <Route
            path="/productdetails/PENDANTS/:id"
            element={<PendantDetailPage />}
          />
          <Route
            path="/productdetails/GOLDCHAINS/:id"
            element={<GoldChainsDetailPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
