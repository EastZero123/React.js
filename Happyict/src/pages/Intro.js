import useScript from "react-script-hook/lib/use-script"

const Intro = () => {
  const [loading, error] = useScript({
    src: `${process.env.PUBLIC_URL}/resources/js/sub.js`,
    // src: "/Layout/styles/js/main.js",
  })
  return (
    <div class="container">
      <div class="content">
        {/* <!-- SUB_VISUAL --> */}
        <div class="visual">
          <div class="sub_visual visual_01">
            <div class="text">
              <p>개요</p>
              <p>
                따뜻한 사람들이 ICT 기술로 행복한 세상을
                <span class="br_640"></span> 만들어가는 곳, 행복ICT
              </p>
            </div>
            <div class="more_btn floating">
              <a href="javascript:">SCROLL</a>
            </div>
          </div>
        </div>
        {/* <!-- // visual --> */}

        {/* <!-- SUB_CONTENTS --> */}
        <div class="sub_contents">
          <div class="info_text">
            <p class="title wow fadeInDown" data-wow-duration="1.5s">
              행복ICT는 기술을 따뜻하게<span class="br_640"></span> 사용할 줄
              아는 기업입니다.
            </p>
            <div class="img wow fadeInDown" data-wow-delay="0.5s">
              <img
                src="../resources/img/contents/company/info_text1.jpg"
                alt=""
              />
            </div>
            <p class="text wow fadeInDown" data-wow-delay="0.5s">
              IT가 필요한 곳에 힘이 되고자 하는 목표를 가진 2개의 법인이 통합된
              행복ICT는 공익적 IT서비스를 제공합니다.
              <br />
              <br />
              보다 선한 가치를 창출할 수 있는 사업에 투자를 아끼지 않는 등
              지속가능한 사업 모델을 연구하여 사회적 가치를 더욱 확대하는
              Leading Company의 역할을 구축해 나가고 있습니다. 또한, 취약계층
              고용을 통하여 소외된 이웃들의 사회진입을 도우며, IT 전문가 육성을
              위해 힘쓰고 있습니다.
              <br />
              <br />
              행복ICT는 주어진 역할을 충실히 해내어 함께 살아가는 사회를 만들어
              나가겠습니다.
            </p>
          </div>
          {/* <!-- // info_text --> */}

          <div class="banner_list intro">
            <ul>
              <li class="title wow fadeInDown" data-wow-delay="0.2s">
                <div class="img"></div>
                <div class="text">
                  <p class="wow fadeInDown" data-wow-duration="1.5s">
                    Social Service
                  </p>
                  <p class="wow fadeInDown" data-wow-duration="2s">
                    공익사업을 통해 함께
                    <br />
                    일하는 세상을 만들어갑니다.
                  </p>
                </div>
              </li>
              <li class="title wow fadeInDown" data-wow-delay="0.5s">
                <div class="img"></div>
                <div class="text">
                  <p class="wow fadeInDown" data-wow-duration="1.5s">
                    Speciality Manpower
                  </p>
                  <p class="wow fadeInDown" data-wow-duration="2s">
                    전문성 있는 인력의
                    <br />
                    발굴 및 육성을 위해 노력합니다.
                  </p>
                </div>
              </li>
              <li class="title wow fadeInDown" data-wow-delay="0.9s">
                <div class="img"></div>
                <div class="text">
                  <p class="wow fadeInDown" data-wow-duration="1.5s">
                    Sustainability
                  </p>
                  <p class="wow fadeInDown" data-wow-duration="2s">
                    사회적&middot;재무적 가치를 확보하여
                    <br />
                    지속가능한 기업을 만들어갑니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- // banner_list --> */}

          <div class="with_text">
            <p class="title wow fadeInDown" data-wow-delay="0.4s">
              또한, 행복ICT는{" "}
              <span class="wow fadeInUp" data-wow-delay="0.6s">
                같이
              </span>
              를 아는 기업입니다.
            </p>
            <p class="text wow fadeInDown" data-wow-delay="1s">
              상/하반기 워크샵, 동호회비 지원을 통해 장애인/비장애인이 함께
              Partnership을 다질 수 있도록 지원하며<span class="br_1024"></span>
              더 나아가, ‘HAPPY Friday’를 통해 가정, 친구와 함께할 수 있는
              시간을 늘려<span class="br_1024"></span>
              ‘같이’의 가치를 확대하는 행복ICT만의 문화를 만들어갑니다.
            </p>
          </div>
          {/* <!-- // info_text --> */}

          <div class="company_info">
            <ul class="title wow fadeInDown" data-wow-delay="0.1s">
              <li>
                <p>회사명</p>
                <p>재단법인 행복아이씨티 (행복ICT)</p>
              </li>
              <li>
                <p>사업분야</p>
                <p>
                  IT 서비스 운영, 시스템 통합서비스,{" "}
                  <span class="br_640"></span>소프트웨어 개발용역, 근로자 파견
                  등
                </p>
              </li>
            </ul>
            <ul class="title wow fadeInDown" data-wow-delay="0.4s">
              <li>
                <p>설립 일자</p>
                <p>
                  설립 : 2011년 12월 16일 (고용노동부 인가)
                  <br />
                  통합 : 2016년 06월 27일 (행복ICT-행복한 W&M)
                </p>
              </li>
              <li>
                <p>인증 현황</p>
                {/* <!-- 20.12.21 --> */}
                <p>
                  고용노동부 인증 사회적기업(제2013-221호)
                  <br />
                  장애인표준사업장 (제2013-064호)
                </p>
              </li>
            </ul>
            <ul class="title wow fadeInDown" data-wow-delay="0.7s">
              <li>
                <p>소재지</p>
                <p>서울시 성동구 성수일로6길 33, 아연디지털타워 2층</p>
              </li>
              <li>
                <p>대표전화</p>
                <p>070-7864-2690</p>
              </li>
            </ul>
            <button
              type="button"
              class="title wow fadeInUp"
              data-wow-delay="0.9s"
            >
              회사소개서
            </button>
          </div>
          {/* <!-- // company_info --> */}
        </div>
        {/* <!-- // SUB_CONTENTS --> */}
      </div>
      {/* <!-- // content --> */}
    </div>
  )
}

export default Intro
