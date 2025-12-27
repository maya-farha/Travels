"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderArrow from "./SliderArrow";
import { SliderProps } from "../Interfaces/interfaces";
import { useState } from "react";


function Slider<T>({
      spaceBetween = 20,
      slidesPerView = 1,
      breakpoints,
      data,
      renderItem,
      speed = 1000,
      title,
}: SliderProps<T>) {
      const [swiperInstance, setSwiperInstance] = useState<any>(null);

      return (
            <div className="relative">
                  <div className="flex flex-col justify-center md:flex-row md:justify-between items-center gap-3.5 mb-15 mt-30.75">
                        <h2 className="text-center text-2xl font-bold">{title}</h2>
                        <SliderArrow swiper={swiperInstance} />
                  </div>

                  <Swiper
                        className=""
                        spaceBetween={spaceBetween}
                        slidesPerView={slidesPerView}
                        speed={speed}
                        onSlideChange={() => console.log("slide change")}
                        breakpoints={breakpoints}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}

                  >
                        {data?.map((item, index) => (
                              <SwiperSlide key={index}>
                                    {renderItem(item)}
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </div>
      );
}

export default Slider;