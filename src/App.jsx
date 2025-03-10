import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Index";
import ContactUs from "./ContactUs"; // Ensure correct import
import AboutUs from "./AboutUs";
import WellnessTips from "./WellnessTips";
import ProcessOverview from "./ProcessOverview";
import Header from "./Header";
import Footer from "./Footer";  // ✅ Import the footer
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";
import Signup from "./Signup";
import TrackProgress from "./TrackProcess";
import AIChat from "./AIChat";





function App() {
  return (
    <Router>
         <Header />  {/* ✅ Global Header */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/processoverview" element={<ProcessOverview />} />
        <Route path="/contactus" element={<ContactUs />} />  {/* Ensure this line is correct */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/wellnesstips" element={<WellnessTips />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} /> {/* ✅ New Route */}
        <Route path="/termsconditions" element={<TermsConditions />} /> {/* ✅ New Route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/aichat" element={<AIChat />} />
        <Route path="/trackprogress" element={<TrackProgress />} />
      </Routes>
      <Footer />  {/* ✅ Global Footer */}
    </Router>
  );
}

export default App;