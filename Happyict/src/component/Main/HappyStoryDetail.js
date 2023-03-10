import React from "react"

const HappyStoryList = [
  {
    aria_describedby: "slick-slide17",
    img: "common/noimage.jpg",
    comment: [
      "하나하나다하나하나다하나하나다하나하나다나하나다나하나다",
      "하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하나다하나하하나다하나하하나다하나하하나다하나하하나다하나하여기",
    ],
    date: "2018.12.12",
  },
  {
    aria_describedby: "slick-slide18",
    img: "story_01.jpg",
    comment: [
      "(재)행복아이씨티 장애인인식개선 교육 내부 실시",
      "세종시 로컬푸드 직매장 싱싱장터 아름점(2호점)이 행복ICT “스마트로컬푸드 시스템”을 적용하고, 2018년 개장하여 운영중에 있습니다.",
    ],
    date: "2018.12.12",
  },
  {
    aria_describedby: "slick-slide19",
    img: "story_02.jpg",
    comment: [
      "(재)행복아이씨티 장애인인식개선 교육 내부 실시",
      "세종시 로컬푸드 직매장 싱싱장터 아름점(2호점)이 행복ICT“스마트로컬푸드 시스템”을 적용하고, 2018년 개장하여 운영중에 있습니다.",
    ],
    date: "2018.12.12",
  },
  {
    aria_describedby: "slick-slide20",
    img: "story_03.jpg",
    comment: [
      "(재)행복아이씨티 장애인인식개선 교육 내부 실시",
      "세종시 로컬푸드 직매장 싱싱장터 아름점(2호점)이 행복ICT“스마트로컬푸드 시스템”을 적용하고, 2018년 개장하여 운영중에 있습니다.",
    ],
    date: "2018.12.12",
  },
]

const HappyStoryDetail = () => {
  return (
    <React.Fragment>
      {HappyStoryList.map((p, i) => {
        return (
          <div
            key={i}
            className="slick-slide slick-cloned"
            style={{ width: "450px" }}
            role="option"
            aria-describedby={p.aria_describedby}
            data-slick-index={`${i - 2}`}
            aria-hidden="false"
          >
            <div>
              <a href="#none">
                <img
                  src={`${process.env.PUBLIC_URL}/resources/img/${p.img}`}
                  alt=""
                />
                <div className="text_area">
                  {p.comment.map((idx) => {
                    return <p>{idx}</p>
                  })}
                  <p>{p.date} </p>
                </div>
              </a>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default HappyStoryDetail
