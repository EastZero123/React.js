const PortFolio = () => {
  return (
    <section>
      <div className="content_wrapper">
        <div className="portfolio_wrap">
          <div className="portfolio">
            <h1 className="h1_title wow fadeInDown" data-wow-delay="0.2s">
              포트폴리오
            </h1>
            <h2 className="h2_title wow fadeInDown" data-wow-delay="0.4s">
              행복ICT가 만들어온 가치를 소개합니다.
            </h2>
            <div
              className="thumbnail_list clear wow fadeInDown"
              data-wow-delay="0.6s"
            >
              <ul>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_lookie.jpg`}
                        alt="루키 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/logo.png`}
                        alt="루키 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_skbionfarm.jpg`}
                        alt="SK바이오팜 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/cses.png`}
                        alt="SK바이오팜 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_cses.jpg`}
                        alt="CSES 사회적가치연구원 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/logo.png`}
                        alt="CSES 사회적가치연구원 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_ensi.jpg`}
                        alt="ENSI 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/logo.png`}
                        alt="ENSI 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_sknetworks.jpg`}
                        alt="SK네트웍스 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/logo.png`}
                        alt="SK네트웍스 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_skinfosec.jpg`}
                        alt="SK인포섹 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/logo.png`}
                        alt="SK인포섹 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_oh_gukak.jpg`}
                        alt="관형맹인전통예술단 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/logo.png`}
                        alt="관형맹인전통예술단 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <span className="figure">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/img_happymore.jpg`}
                        alt="행복모아 포트폴리오 바로가기"
                      />
                    </span>
                    <span className="figure_logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/resources/img/common/portfolio/logo.png`}
                        alt="행복모아 포트폴리오 바로가기"
                      />
                    </span>
                  </a>
                </li>
              </ul>

              {/* <!-- .button_area 클래스 추가 --> */}
              <div className="button_area">
                <button
                  type="button"
                  className="wow fadeInDown"
                  data-wow-delay="0.7s"
                >
                  MORE
                </button>
              </div>
            </div>
          </div>
          {/* <!-- // portfolio --> */}
        </div>
        {/* <!-- // portfolio_wrap --> */}
      </div>
      {/* <!-- // content_wrapper --> */}
    </section>
  )
}

export default PortFolio
