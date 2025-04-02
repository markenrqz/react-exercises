import Accordion from "./Components/1-accordion/index.jsx";
import RandomColor from "./Components/2-random-color/index.jsx";
import StarRating from "./Components/3-star-rating/index.jsx";
import ImageSlider from "./Components/4-image-slider/index.jsx";
import TreeView from "./Components/6-tree-view/index.jsx";
import menus from "./Components/6-tree-view/data.js";
import QRCodeGenerator from "./Components/7-qr-code-generator/index.jsx";
import LightDarkMode from "./Components/8-light-dark-mode/index.jsx";
import ScrollIndicator from "./Components/9-scroll-indicator/index.jsx";
import TabTest from "./Components/10-custom-tabs/tab-test.jsx";
import ModalTest from "./Components/11-custom-modal-popup/modal-test.jsx";
import GithubProfileFinder from "./Components/12-github-profile-finder/index.jsx";
import SearchAutoComplete from "./Components/13-search-auto-complete/index.jsx";

const App = () => {
  return (
    <div className="App">
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Tree View / Recursive Side Bar Menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator/> */}

      {/* Light and Dark Theme Switch */}
      {/* <LightDarkMode /> */}

      {/* Scoll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Custom tabs component */}
      {/* <TabTest/> */}

      {/* Custom modal component */}
      {/* <ModalTest /> */}

      {/* Github profile finder component */}
      {/* <GithubProfileFinder /> */}

      {/* Search Auto Complete */}
      <SearchAutoComplete />
    </div>
  );
};

export default App;
