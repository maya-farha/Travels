
import Image from "next/image"
import { travels } from "../data/data"


function Popular() {
      return (
            <div className="py-15 px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5">
                  <h1 className="text-[32px] text[#333333] font-extrabold mb-15">The Most Popular Packages</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8.25 ">

                        {travels.map((travel, index) => (
                              <div key={index} className="border border-[#EFEFEF] rounded-3xl">
                                    <div className="relative aspect-4/3 w-full overflow-hidden mb-5">
                                          <Image src={travel.img} alt="" fill></Image>
                                    </div>
                                    <div className="p-6">

                                          <h2 className="font-extrabold text-[20px]">{travel.title}</h2>
                                          <div className="relative ">
                                                <span className="absolute top-3 text-[#333333] opacity-60">€</span>
                                                <p className="inline text-[48px] text-[#FA8B02] font-bold ml-2.5 ">{travel.days}</p>
                                                <span className="text-[#333333] opacity-60">/day</span>
                                          </div>
                                          
                                          <div>
                                                {travel.service.map((ser, index) => (
                                                      <div className="flex gap-4 py-4">
                                                            <img src={ser.image} alt={ser.alt}></img>
                                                            <p>{ser.title}</p>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                                    <button className="text-[#FA8B02] border border-[#FA8B02] py-3 w-full rounded-[50px]">Book Now </button>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Popular
