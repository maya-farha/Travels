import Image from "next/image"
import { Service } from "../Interfaces/interfaces"
import { SevicesContent } from "../data/data"


function Services() {
      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8.25 py-15 px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5">
                  {SevicesContent.map((ser, index) => (
                        <div className="" key={index}>
                              <div className="relative aspect-4/3 w-full overflow-hidden mb-5">
                                    <Image src={ser.image} alt={ser.alt} fill className=""></Image>
                              </div>
                              <div className="text-[#333333]">
                                    <h2 className="text-[24px] font-bold mb-3">{ser.title}</h2>
                                    <p className="text-[18px] leading-6.5">{ser.description}</p>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default Services
