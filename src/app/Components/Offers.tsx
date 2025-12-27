import Image from "next/image"
import { OffersSection } from "../Interfaces/interfaces"


function Offers({content}:{content:OffersSection}) {
      return (
            <div className=" relative w-full h-auto bg-[url(/background.png)] bg-cover bg-no-repeat py-15 px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5 mt-54.25 mb-30">

                  <div className="bg-[#FFFFFF4D] p-7.5 rounded-3xl md:max-w-130 lg:max-w-142.25 text-[#333333] text-center">
                        <h1 className="text-[32px] font-extrabold mb-8">{content.title}</h1>
                        <p className="text-[18px] leading-8 mb-8">{content.description}</p>
                        <button className="text-white bg-[#FA8B02] px-6 py-2.5 rounded-[50px]">{content.bttn}</button>
                  </div>
                  
                  <Image src={content.image} alt="offers" width={427} height={427} className=" hidden absolute bottom-0 right-5 md:block md:w-75 md:right-10 lg:w-106.75 lg:right-20 xl:right-37.5 2xl:right-62.5"></Image>
            </div>
      )
}

export default Offers
