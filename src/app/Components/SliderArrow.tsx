interface SliderArrowProps {
      swiper: any; 
}
function SliderArrow({ swiper }: SliderArrowProps) {
      return (
            <div>
                  <div className="flex items-center gap-5">
                        <button onClick={() => swiper?.slidePrev()} className="w-12.5 h-12.5 rounded-[50%] bg-[#EFEFEF] flex justify-center items-center">
                              <img src="/left-arrow.png" alt="icon"></img>
                        </button>

                        <button onClick={() => swiper?.slideNext()} className="w-12.5 h-12.5 rounded-[50%]  bg-[#FA8B02] flex justify-center items-center">
                              <img src="/right-arrow.png" alt="icon"></img>
                        </button>
                  </div>
            </div>
      );
}

export default SliderArrow;
