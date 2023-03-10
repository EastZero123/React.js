import { useEffect, useReducer, useState } from "react"
import { Link } from "react-router-dom"
import useScript from "react-script-hook/lib/use-script"
import HappyStory from "../component/Main/HappyStory"
import PortFolio from "../component/Main/PortFolio"
import Banner from "../component/Main/SideBanner"
import SideBanner from "../component/Main/SideBanner"

const sideBanner = (states, action) => {
  switch (action.type) {
    case "FIRST":
      return (states = 1)
    case "SECOND":
      return (states = 2)
    case "THIRD":
      return (states = 3)
    default:
      return (states = 1)
  }
}

const MainPage = (props) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth)
    }
    window.addEventListener("resize", resizeListener)
  }, [innerWidth])

  let [state, dispatch] = useReducer(sideBanner, 1)
  const first = () => {
    dispatch({
      type: "FIRST",
    })
  }
  const second = () => {
    dispatch({
      type: "SECOND",
    })
  }
  const third = () => {
    dispatch({
      type: "THIRD",
    })
  }

  const [loading, error] = useScript({
    src: `${process.env.PUBLIC_URL}/resources/js/main.js`,
    // src: "/Layout/styles/js/main.js",
  })
  const [play, isPlay] = useState(true)
  return (
    <div className="container">
      <div className="content">
        {/* <!-- VISUAL --> */}
        <section className="section">
          <div className="content_wrapper">
            <div className="visual_wrap">
              <div
                id="main_slide"
                className="visual slick-initialized slick-slider slick-dotted"
                role="toolbar"
              >
                <div aria-live="polite" className="slick-list draggable">
                  <div
                    className="slick-track"
                    role="listbox"
                    style={{
                      opacity: "1",
                      width: innerWidth * 3,
                    }}
                  >
                    <Banner state={state} innerWidth={innerWidth} />
                  </div>
                </div>

                <ul
                  className="slick-dots"
                  role="tablist"
                  style={{ display: "block" }}
                >
                  <li
                    className={state === 1 ? "slick-active" : ""}
                    aria-hidden="false"
                    role="presentation"
                    aria-selected="true"
                    aria-controls="navigation00"
                    id="slick-slide00"
                    onClick={first}
                  >
                    <a>01</a>
                  </li>
                  <li
                    className={state === 2 ? "slick-active" : ""}
                    aria-hidden="false"
                    role="presentation"
                    aria-selected="true"
                    aria-controls="navigation01"
                    id="slick-slide01"
                    onClick={second}
                  >
                    <a>01</a>
                  </li>
                  <li
                    className={state === 3 ? "slick-active" : ""}
                    aria-hidden="false"
                    role="presentation"
                    aria-selected="true"
                    aria-controls="navigation02"
                    id="slick-slide02"
                    onClick={third}
                  >
                    <a>01</a>
                  </li>
                </ul>
              </div>
              {/* <!-- // visual --> */}

              <div className="contact_txt">
                <Link to={"/company/map"}>Contact us</Link>
              </div>
              {/* <!-- // contact_txt --> */}

              <div className="visual_btn">
                <button
                  className={`${!play ? "btn_play on" : "btn_play"}`}
                  onClick={() => isPlay((e) => !e)}
                >
                  {!play ? "재생" : "정지"}
                </button>
              </div>
              {/* <!-- // visual_btn --> */}

              <div className="more_btn floating">
                <a href="javascript:">SCROLL</a>
              </div>
              {/* <!-- // more_btn --> */}
            </div>
            {/* <!-- // visual_wrap --> */}
          </div>
          {/* <!-- // content_wrapper --> */}
        </section>
        {/* <!-- // VISUAL --> */}

        {/* <!-- MENU_AREA --> */}
        <section className="section">
          <div className="content_wrapper">
            <div className="business_wrap">
              <div className="pc">
                <ul className="list">
                  <li className="grid1">
                    <div className="inner">
                      <div className="txtbox">
                        <div className="txt">
                          <p className="wow fadeInDown" data-wow-delay="0.2s">
                            기술로 <span className="br"></span>만들어가는 가치
                          </p>
                          <p className="wow fadeInDown" data-wow-delay="0.4s">
                            웹, 모바일, 솔루션 등 ICT 기술력과 노하우로
                            <br />
                            고객의 성공적인 서비스를 제공합니다.
                          </p>
                          <div
                            className="menu_btn_R wow fadeInLeft"
                            data-wow-delay="0.6s"
                          >
                            메뉴 더 보기
                          </div>
                        </div>
                      </div>
                      {/* <!-- // txtbox --> */}
                      <div className="bg-hover">
                        <div className="menu_link">
                          <ul>
                            <li>
                              <a href="../business/service.html">
                                <p>IT 통합 개발/운영</p>
                                <p>
                                  다양한 분야의 IT 서비스를{" "}
                                  <span className="br"></span>제공합니다.
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href="../business/service.html">
                                <p>UI/UX 디자인 컨설팅</p>
                                <p>
                                  사용자의 편의성을 고려한 디자인을{" "}
                                  <span className="br"></span>컨설팅합니다.
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href="../business/service.html">
                                <p>ERP/자동화 서비스</p>
                                <p>
                                  풍부한 경험을 가진 고급인력을 적절한{" "}
                                  <span className="br"></span>사업과 매칭합니다.
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href="../business/solution.html">
                                <p> ICT 솔루션</p>
                                <p>
                                  행복ICT만의 솔루션으로 서비스를{" "}
                                  <span className="br"></span>제공합니다.
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- // menu_link --> */}
                      </div>
                      <div className="bg-black"></div>
                    </div>
                  </li>
                  {/* <!-- // grid1 --> */}

                  <li className="grid2">
                    <div className="inner">
                      <div className="txtbox">
                        <div className="txt">
                          <p className="wow fadeInDown" data-wow-delay="0.2s">
                            함께하면 <span className="br"></span>더 커지는 가치
                          </p>
                          <p className="wow fadeInDown" data-wow-delay="0.4s">
                            IT 비지니스를 통해 장애인 일자리 창출 등<br />
                            사회적 가치를 실현합니다.
                          </p>
                          <div
                            className="menu_btn_L wow fadeInRight"
                            data-wow-delay="0.6s"
                          >
                            메뉴 더 보기
                          </div>
                        </div>
                      </div>
                      {/* <!-- // txtbox --> */}
                      <div className="bg-hover">
                        <div className="menu_link">
                          <ul>
                            <li>
                              <a href="../business/employment.html">
                                <p>취약계층 고용</p>
                                <p>
                                  편견없이 함께 일하는 사회를{" "}
                                  <span className="br"></span>함께 만들어갑니다.
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href="../business/education.html">
                                <p>장애인 IT육성/교육</p>
                                <p>
                                  경쟁력있는 사회구성원이 될 수{" "}
                                  <span className="br"></span>있도록 행복ICT가
                                  응원합니다.
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href="../business/contribution.html">
                                <p>IT 사회공헌</p>
                                <p>
                                  IT기술을 나누며 지역 내 기관 및{" "}
                                  <span className="br"></span>단체들과 더불어
                                  살아갑니다.
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- // menu_link --> */}
                      </div>
                      <div className="bg-black"></div>
                    </div>
                  </li>
                  {/* <!-- // grid2 --> */}
                </ul>
              </div>

              <div className="mobile">
                <div className="txtbox" id="pop_1">
                  <div className="txt">
                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                      기술로 <span className="br"></span>만들어가는 가치
                    </p>
                    <p className="wow fadeInDown" data-wow-delay="0.4s">
                      웹, 모바일, 솔루션 등 ICT 기술력과 노하우로
                      <br />
                      고객의 성공적인 서비스를 제공합니다.
                    </p>
                    <div
                      className="popup_btn wow fadeInDown"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/icon_plus.png`}
                        alt="메뉴 더 보기"
                      />
                    </div>
                  </div>
                  {/* <!-- // txt --> */}
                  <div id="popup_menu" className="pop_menu_1">
                    <div className="b-close">
                      <p>닫기</p>
                    </div>
                    <div className="popupContent">
                      <div className="menu_link">
                        <ul>
                          <li>
                            <a href="../business/service.html">
                              <p>IT 통합 개발/운영</p>
                              <p>
                                다양한 분야의 IT 서비스를{" "}
                                <span className="br"></span>제공합니다.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="../business/service.html">
                              <p>UI/UX 디자인 컨설팅</p>
                              <p>
                                사용자의 편의성을 고려한 디자인을{" "}
                                <span className="br"></span>컨설팅합니다.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="../business/service.html">
                              <p>ERP/자동화 서비스</p>
                              <p>
                                풍부한 경험을 가진 고급인력을 적절한{" "}
                                <span className="br"></span>사업과 매칭합니다.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="../business/solution.html">
                              <p> ICT 솔루션</p>
                              <p>
                                행복ICT만의 솔루션으로 서비스를{" "}
                                <span className="br"></span>제공합니다.
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- // menu_link --> */}
                    </div>
                    {/* <!-- // popupContent --> */}
                  </div>
                  {/* <!-- // popup_menu --> */}
                </div>
                {/* <!-- // txtbox --> */}

                <div className="txtbox" id="pop_2">
                  <div className="txt">
                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                      함께하면 <span className="br"></span>더 커지는 가치
                    </p>
                    <p className="wow fadeInDown" data-wow-delay="0.4s">
                      IT 비지니스를 통해 장애인 일자리 창출 등<br />
                      사회적 가치를 실현합니다.
                    </p>
                    <div
                      className="popup_btn wow fadeInDown"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/icon_plus.png`}
                        alt="메뉴 더 보기"
                      />
                    </div>
                  </div>
                  {/* <!-- // txt --> */}
                  <div id="popup_menu" className="pop_menu_2">
                    <div className="b-close">
                      <p>닫기</p>
                    </div>
                    <div className="popupContent">
                      <div className="menu_link">
                        <ul>
                          <li>
                            <a href="../business/employment.html">
                              <p>취약계층 고용</p>
                              <p>
                                편견없이 함께 일하는 사회를{" "}
                                <span className="br"></span>함께 만들어갑니다.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="../business/education.html">
                              <p>장애인 IT육성/교육</p>
                              <p>
                                경쟁력있는 사회구성원이 될 수{" "}
                                <span className="br"></span>있도록 행복ICT가
                                응원합니다.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="../business/contribution.html">
                              <p>IT 사회공헌</p>
                              <p>
                                IT기술을 나누며 지역 내 기관 및{" "}
                                <span className="br"></span>단체들과 더불어
                                살아갑니다.
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- // menu_link --> */}
                    </div>
                    {/* <!-- // popupContent --> */}
                  </div>
                  {/* <!-- // popup_menu --> */}
                </div>
                {/* <!-- // txtbox --> */}
              </div>
              {/* <!-- // mobile --> */}
            </div>
            {/* <!-- // business_wrap --> */}
          </div>
          {/* <!-- // content_wrapper --> */}
        </section>
        {/* <!-- // MENU_AREA --> */}

        {/* <!-- PORTFOLIO --> */}
        <PortFolio />
        {/* <!-- // PORTFOLIO --> */}

        {/* <!-- HAPPYSTORY --> */}
        <HappyStory />
        {/* <!-- // HAPPYSTORY --> */}
      </div>
      {/* <!-- // content --> */}
    </div>
  )
}

export default MainPage
