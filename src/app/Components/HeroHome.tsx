import { Option } from "../Interfaces/interfaces"
import Options from "./Options"
const SelectOptions: Option[] = [
      {
            title: "Number of people",
            img: "/people_icon.png",
            disabled: "Choose people",
            option: ["1", "2", "5"]
      },
      {
            title: "Date",
            img: "/date_icon.png",
            disabled: "Choose Date",
            option: ["Today", "Tomorrow"]
      },
      {
            title: "Time",
            img: "/time_icon.png",
            disabled: "Choose Time",
            option: ["10:00 AM", "02:00 PM"]
      },
      {
            title: "Tour",
            img: "/tour_icon.png",
            disabled: "Choose Tour",
            option: ["10:00 AM", "02:00 PM"]
      },
      {
            title: "Transportation",
            img: "/transport_icon.png",
            disabled: "Choose Transportation",
            option: ["10:00 AM", "02:00 PM"]
      }
]



function HeroHome() {
      return (
            <header className="flex flex-col justify-center items-center h-screen w-full bg-[url('/Hero_Home.png')] bg-cover bg-no-repeat bg-center">
                  <h1 className="font-podcast text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">Enjoy in the best way!</h1>
                  <h3 className="text-2xl mt-4">Enjoy our services for your trip anytime</h3>
                  <div>
                        {/* select option */}
                        <Options optionsItem={SelectOptions}></Options>
                  </div>

            </header>
      )
}

export default HeroHome
