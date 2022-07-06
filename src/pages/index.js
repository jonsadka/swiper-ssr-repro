import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

const slideStyle = {
  backgroundColor: "pink",
  cursor: "pointer",
  height: "200px",
}

export default function Home() {
  return (
    <div style={{ padding: "24px 64px" }}>
      Hello World!
      <div style={{ width: "200px" }}>
        <Swiper loop={true} slidesPerView={1}>
          <SwiperSlide style={slideStyle}>Slide A</SwiperSlide>
          <SwiperSlide style={slideStyle}>Slide B</SwiperSlide>
          <SwiperSlide style={slideStyle}>Slide C</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
