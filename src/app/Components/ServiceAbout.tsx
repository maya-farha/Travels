import Image from "next/image"
import { ServiceCard } from "../Interfaces/interfaces"

function ServiceAbout({ content }: { content: ServiceCard[] }) {
      return (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20.75 w-full bg-[url(/background.png)] bg-cover bg-no-repeat py-15 px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5 mt-54.25 mb-30">
                  {content.map((item, index) => (
                        <div key={index} className="  p-7.5 rounded-3xl bg-[#FFFFFF4D] ">

                              <Image src={item.image} alt={item.alt} width={60} height={60} className="mx-auto mb-3.5"></Image>
                              <h2 className=" text-[20px] font-semibold text-center">{item.title}</h2>
                              
                        </div>
                  ))}
            </div>
      )
}

export default ServiceAbout
