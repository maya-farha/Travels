
"use client";
import React from "react";
import { SwiperOptions } from "swiper/types";
import Slider from "./Slider";

interface SliderContentProps<T> extends SwiperOptions {
      data: T[];
      title: string;
      renderItem: (item: T) => React.ReactNode;
      containerClassName?: string;
}

function SliderContent<T>({
      data,
      title,
      renderItem,
      ...sliderProps
}: SliderContentProps<T>) {
      return (
            <section className="px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5">
                  <Slider
                        title={title}
                        data={data}
                        renderItem={renderItem}
                        {...sliderProps}
                  />
            </section>
      );
}

export default SliderContent;