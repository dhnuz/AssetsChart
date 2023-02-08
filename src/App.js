import Header from "./Component/Head";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

import Navbar from "./Component/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="section">
          {" "}
          <Header />
          <Body />
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;
