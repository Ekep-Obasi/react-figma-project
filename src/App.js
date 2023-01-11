import "./App.css";

import Carousel from "./Home/Carousel/Carousel";
import MenuBar from "./GeneralComp/MenuBar/MenuBar";
import StickyBar from "./GeneralComp/StickyBar/StickyBar";
import BorderBottom from "./Home/BorderBottom/BorderBottom";
import Card from "./Home/Cards/Card";
import Header from "./Home/Header/Header";
import Slider from "./Home/Slider/Slider";
import Logos from "./Home/Logos/Logos";
import Profiles from "./Home/Profiles/Profiles";
import Footer from "./GeneralComp/Footer/Footer";


function App() {
  return (
    <div className="App">
      <StickyBar />
      <MenuBar />
      <Carousel />
      <BorderBottom />
      <Header title="Choose your Package" subtitle= "Select your Best Package for your Travel" />
      <Card />
      <Header title="Popular Destinations" subtitle="Select Our Best Popular Destinations" />
      <Slider />
      <Header title="Why us?" subtitle="Why Travel with Africa wizzy Safari" />
      <Logos />
      <Header title="Our Traveller Say" subtitle="What our clients say about us" />
      <Profiles />
      <Footer />
    </div>
  );
}

export default App;
