import React, { useState } from "react"
import HappyStoryDetail from "./HappyStoryDetail"

const HappyStoryItem = () => {
  const [value, isValue] = useState(0)
  const TransformIncrease = () => {
    if (value >= -0) {
      isValue(value - 900)
    } else {
      isValue(0)
    }
  }

  const TransformDecrease = () => {
    if (value <= 0 && value >= -900) {
      isValue(value + 900)
    } else {
      isValue(0)
    }
  }

  return (
    <React.Fragment>
      <a
        href="javascript:"
        className="slick-prev slick-arrow"
        style={{ display: "block" }}
        onClick={TransformDecrease}
      >
        Previous
      </a>
      <div aria-live="polite" className="slick-list draggable">
        <div
          className="slick-track"
          role="listbox"
          style={{
            opacity: "1",
            width: "5850px",
            transform: "translate3d(" + value + "px, 0, 0)",
          }}
        >
          <HappyStoryDetail />
        </div>
      </div>
      <a
        href="javascript:"
        className="slick-next slick-arrow"
        style={{ display: "block" }}
        onClick={TransformIncrease}
      >
        Next
      </a>
    </React.Fragment>
  )
}

export default HappyStoryItem
