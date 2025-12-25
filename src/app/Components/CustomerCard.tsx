import Image from "next/image"
import { CustomrReview } from "../Interfaces/interfaces"
interface CustomerCardProps {
      customer: CustomrReview
}
function CustomerCard({ customer }: CustomerCardProps) {
      return (
            <div className="p-7.5 border border-[#EFEFEF] rounded-3xl">
                  <div className="w-fit m-auto">
                        <Image src={customer.image} alt="customer" width={80} height={80} className="mb-3.75"></Image>
                        <p>{customer.name}</p>
                  </div>
                  <p className="leading-7.5 text-[#333333]">{customer.review}</p>
            </div>
      )
}

export default CustomerCard
