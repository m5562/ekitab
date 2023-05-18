import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Bottombar from "./comps/Bottombar";
import Topbar from "./comps/Topbar";

import Home from "./pages/Home";
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app" style={{ background: "var(--body-background)" }}>
      <Topbar></Topbar>
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/account" element={<div>account</div>}></Route>
            <Route path="/test" element={<div>test</div>}></Route>
            <Route path="/study" element={<div>study</div>}></Route>
            <Route path="/notice" element={<div>notifications</div>}></Route>
            <Route
              path="*"
              element={
                <div>
                  Whow!! you spelt it wrong. Try putting the fair things.
                </div>
              }
            ></Route>
          </Routes>
        </div>
        <Link to={"./about"}>hello</Link>
      </div>
      <Bottombar activeIndex={0}></Bottombar>
    </div>
  );
}

export default App;
