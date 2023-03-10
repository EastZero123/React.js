import HappyStoryItem from "./HappyStoryItem"

const HappyStory = () => {
  return (
    <section>
      <div className="content_wrapper">
        <div className="news_wrap">
          <div className="news">
            <h1 className="h1_title wow fadeInDown" data-wow-delay="0.2s">
              행복이야기
            </h1>
            <h2 className="h2_title wow fadeInDown" data-wow-delay="0.4s">
              행복ICT의 새로운 소식을 전합니다.
            </h2>

            {/* <!-- board-slider --> */}
            <div className="pc">
              <div
                className="img_slider wow fadeInDown slick-initialized slick-slider"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInDown",
                }}
              >
                <HappyStoryItem />
              </div>
            </div>
            {/* <!-- // pc --> */}

            <div className="mobile">
              <div className="img_list wow fadeInDown" data-wow-delay="0.6s">
                <div className="list_box">
                  <a href="#none">
                    <div
                      className="img"
                      style={{
                        background: `url(${process.env.PUBLIC_URL}/resources/img/story_01.jpg) no-repeat center top`,
                      }}
                    ></div>
                    <div className="text_area">
                      <p>2018 행복한 나눔 행사</p>
                      <p>
                        세종시 로컬푸드 직매장 싱싱장터 아름점(2호점)이 행복ICT
                        “스마트로컬푸드 시스템”을 적용하고, 2018년 개장하여
                        운영중에 있습니다.
                      </p>
                      <p>2018.12.12 </p>
                    </div>
                  </a>
                </div>
                <div className="list_box">
                  <a href="#none">
                    <div
                      className="img"
                      style={{
                        background: `url(${process.env.PUBLIC_URL}/resources/img/banner_R_bg.jpg) no-repeat center top`,
                      }}
                    ></div>
                    <div className="text_area">
                      <p>2018 행복한 나눔 행사</p>
                      <p>
                        세종시 로컬푸드 직매장 싱싱장터 아름점(2호점)이 행복ICT
                        “스마트로컬푸드 시스템”을 적용하고, 2018년 개장하여
                        운영중에 있습니다.
                      </p>
                      <p>2018.12.12 </p>
                    </div>
                  </a>
                </div>
                <div className="list_box">
                  <a href="#none">
                    <div
                      className="img"
                      style={{
                        background: `url(${process.env.PUBLIC_URL}/resources/img/m_business_img02.jpg) no-repeat center top`,
                      }}
                    ></div>
                    <div className="text_area">
                      <p>2018 행복한 나눔 행사</p>
                      <p>
                        세종시 로컬푸드 직매장 싱싱장터 아름점(2호점)이 행복ICT
                        “스마트로컬푸드 시스템”을 적용하고, 2018년 개장하여
                        운영중에 있습니다.
                      </p>
                      <p>2018.12.12 </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- // mobile --> */}
            {/* <!-- // board-slider --> */}
          </div>
          {/* <!-- // news --> */}
        </div>
        {/* <!-- // news_wrap --> */}
      </div>
      {/* <!-- // content_wrapper --> */}
    </section>
  )
}

export default HappyStory
