"use client";
import { CiSearch } from "react-icons/ci"
import { Option } from "../Interfaces/interfaces"
import { useState } from "react"

function Options({ optionsItem }: { optionsItem: Option[] }) {
      const [active, setactive] = useState("")
      return (
            <div className="p-5 mt-15 bg-white/10 backdrop-blur-sm rounded-xl ">
                  <div className="flex">
                        <button onClick={() => { setactive("public") }} className={`flex gap-2.5 rounded-tl-xl border-0 ${active == "public" ? "text-[#FA8B02] bg-white " : "bg-[#ffffff60] text-white"} p-4`}>
                              <img src="/Public_tours.png" ></img>
                              Public Tours
                        </button>
                        <button onClick={() => { setactive("private") }} className={`flex gap-2.5 rounded-tr-xl border-0 ${active == "private" ? "text-[#FA8B02] bg-white" : "bg-[#ffffff60] text-white"} p-4`}>
                              <img src="/Private_tours.png"></img>
                              Private Tours
                        </button>
                  </div>
                  <div className="grid md:grid-cols-2 xl:grid-cols-6 p-3 gap-3 bg-white rounded-xl rounded-tl-none rounded-tr-none md:rounded-tr-xl">

                        {optionsItem.map((option, index) => (
                              <div className="p-4 w-full" key={index}>
                                    <div className="flex gap-1.5">
                                          <img src={option.img}></img>
                                          <p className="text-[18px] text-[#333333] font-semibold">{option.title}</p>
                                    </div>
                                    <select className="text-[#333333] opacity-80 ml-7.5" defaultValue={option.disabled}>
                                          <option disabled value={option.disabled}>{option.disabled}</option>
                                          {option.option.map((item, index) => (
                                                <option key={index}>{item}</option>
                                          ))}
                                    </select>
                              </div>
                        ))}
                        
                        <button className="p-6 bg-[#FA8B02] rounded-xl cursor-pointer w-fit">
                              <CiSearch className="text-[32px]" />
                        </button>
                  </div>
            </div>
      )
}

export default Options
