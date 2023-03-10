import React, { useEffect, useState } from "react"

const Banner = (props) => {
  const Bannerdata = [
    {
      index: "0",
      img: "visual_01.jpg",
      mimg: "m_visual_01.jpg",
      comment: ["따뜻한 사람들이 ICT 기술로", "행복한 세상을 만들어갑니다"],
      left: "0",
    },
    {
      index: "1",
      img: "visual_02.jpg",
      mimg: "m_visual_02.jpg",
      comment: [
        "고객의 마음을 움직이는 비즈니스 파트너",
        "Needs에서 가치를 찾고,",
        "기술력을 더해 서비스를 만듭니다.",
      ],
      left: `-${props.innerWidth}`,
    },
    {
      index: "2",
      img: "visual_03.jpg",
      mimg: "m_visual_03.jpg",
      comment: [
        "편견을 버릴 때, 인재가 보입니다.",
        "함께 일하는 세상, 우리가 만들어 갑니다.",
      ],
      left: `-${props.innerWidth * 2}`,
    },
  ]
  return (
    <React.Fragment>
      {Bannerdata.map((list, i) => {
        return (
          <div
            key={i}
            className={`slick-slide ${
              i + 1 === props.state
                ? "slick-current slick-active active-item"
                : ""
            }`}
            data-slick-index={list.index}
            aria-hidden={`${i + 1 === props.state ? "false" : "true"}`}
            role="option"
            aria-describedby={`slick-slide0${i}`}
            style={{
              width: props.innerWidth,
              position: "relative",
              left: -(props.innerWidth * i),
              top: "0px",

              zIndex: `${i + 1 === props.state ? "999" : "998"}`,
              opacity: `${i + 1 === props.state ? "1" : "0"}`,
              transition: `${
                i + 1 === props.state ? "" : "opacity 500ms ease 0s"
              }`,
            }}
          >
            <div
              className="visual_web"
              style={{
                background: `url(${process.env.PUBLIC_URL}/resources/img/${list.img}) no-repeat center top`,
              }}
            ></div>
            <div className="visual_m">
              <img
                src={`${process.env.PUBLIC_URL}/resources/img/${list.mimg}`}
                alt="첫번째 슬라이드"
              />
            </div>
            <div className="visual_cont">
              <p>
                {list.comment.map((idx) => {
                  return (
                    <React.Fragment>
                      {idx}
                      <br />
                    </React.Fragment>
                  )
                })}
              </p>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default Banner
