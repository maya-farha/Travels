import Image from "next/image"
import { CardDestinationProps } from "../Interfaces/interfaces"


function CardDestination({ cardContent }: { cardContent: CardDestinationProps }) {
      return (
            <div>
                  <Image src={cardContent.image} alt={cardContent.alt} width={330} height={404} className="w-full"></Image>
                  <div>
                        <h2 className="text-[24px] font-bold text-[#333333]">{cardContent.title}</h2>
                        <p>from <span className="text-[24px] font-extrabold text-[#FA8B02]">{cardContent.price} €</span></p>
                        <div className="flex justify-between items-center">
                              <div className="flex gap-2">
                                    <img src="/calender-orange.png" alt="icon"></img>
                                    <p className="font-semibold text-[#FA8B02]">{cardContent.date}</p>
                              </div>
                              <div className="flex gap-2">
                                    <img src="/tours-orange.png" alt="icon"></img>
                                    <p className="font-semibold text-[#FA8B02]">{cardContent.people}</p>
                              </div>
                        </div>
                        <p className="text-[18px] leading-6.5">{cardContent.description}</p>
                  </div>
            </div>
      )
}

export default CardDestination
