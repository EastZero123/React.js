import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useScript from "react-script-hook"

const Header = (props) => {
  const [nav, isNav] = useState(false)

  const toggleNav = () => {
    isNav((e) => !e)
  }

  useEffect(() => {
    const effect = () => {}
    effect()
  }, [props.pathname])

  return (
    <div id="header">
      {/* <!-- GNB 硫붾돱 --> */}
      <div className="h_group">
        <h1 className="top_logo">
          <Link to="/"></Link>
        </h1>
        {/* <!-- // top_logo --> */}

        <div className="nav_area">
          <div
            className={`navbar_toggle ${nav ? "navbar_on" : ""}`}
            title="Menu"
            onClick={toggleNav}
          >
            {/* <!-- 230202 sns 踰꾪듉 異붽� --> */}
            <div className="icon_sns">
              <ul>
                <li>
                  <a
                    href="https://me2.do/FpMiAts7"
                    target="_blank"
                    className="icon_zepeto"
                    title="제페토 이동하기(새창 열림)"
                  >
                    <span className="blind">제페토</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.naver.com/happyict_"
                    target="_blank"
                    className="icon_blog"
                    title="블로그 이동하기(새창 열림)"
                  >
                    <span className="blind">블로그</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@happyict_"
                    target="_blank"
                    className="icon_youtube"
                    title="유튜브 이동하기(새창 열림)"
                  >
                    <span className="blind">유튜브</span>
                  </a>
                </li>
              </ul>
            </div>
            <p className="menu_text">MENU</p>
            <p className="close_text">CLOSE</p>
            <div className="menu_bar">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div className="nav">
            <nav className="" style={{ display: `${nav ? "block" : "none"}` }}>
              <ul className="link_ul">
                <li>
                  <Link to={"/company/map"}>Contact us</Link>
                </li>
              </ul>
              <div id="gnb">
                <ul>
                  <li>
                    <p>소개하다</p>
                    <ul onClick={toggleNav}>
                      <li>
                        <Link to={"company/intro"}>개요</Link>
                      </li>

                      <li>
                        <Link to={"/company/map"}>Contact us</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <!-- // gnb --> */}
            </nav>
          </div>
          {/* <!-- // nav --> */}
        </div>
        {/* <!-- // nav_area --> */}
      </div>
      {/* h_group  */}
    </div>
  )
}

export default Header
