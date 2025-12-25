'use client'
import Image from "next/image"
import { AboutUs } from "../Interfaces/interfaces"


function AboutComponent({ aboutContent }: { aboutContent: AboutUs }) {
      return (
            <div className="md:flex justify-between items-center px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5 mt-30">
                  <Image src={aboutContent.img} alt={aboutContent.alt} width={450} height={650} className=" md:max-w-[45%] w-full xl:w-112.5 mb-6"></Image>
                  <div className="text-[#333333] md:max-w-[54%] xl:max-w-[36.4%]">

                        <p className=" text-[16px] font-semibold opacity-60">{aboutContent.subTitle}</p>
                        <h1 className="text-[32px] font-extrabold">{aboutContent.title}</h1>
                        <p className="text-sm/8">{aboutContent.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12.5 mt-8">
                              {aboutContent.statistics.map((item, index) => (
                                    <div key={index} className="max-w-20.75">
                                          <strong className="text-[#FA8B02]">{item.value}</strong>
                                          <p>{item.title}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default AboutComponent
