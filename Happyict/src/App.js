import "./App.css"
import Footer from "./component/common/Footer"
import Header from "./component/common/Header"
import { Route, Routes, useLocation } from "react-router-dom"
import Intro from "./pages/Intro"
import Contact from "./pages/Contact"
import MainPage from "./pages/Main"

function App() {
  const location = useLocation()

  return (
    <body className="home">
      <ul id="skip-navi">
        <li>
          <a href="#content">본문 바로가기</a>
        </li>
      </ul>
      {/* <!-- wrap --> */}
      <div className="wrap">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage pathname={location.pathname} />} />
          {/* <!-- // container --> */}
          <Route path="/company/intro" element={<Intro />} />
          <Route path="/company/map" element={<Contact />} />
        </Routes>
        {/* <!-- footer --> */}
        <Footer />
        {/* <!-- //footer --> */}
      </div>
      {/* <!-- //wrap --> */}
    </body>
  )
}

export default App
