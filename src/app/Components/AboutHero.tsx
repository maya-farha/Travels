'use client'
import { HeroAbout } from "../Interfaces/interfaces"
function AboutHero({ title, description, button }: HeroAbout) {
      return (
            <div>
                  <header className="flex flex-col justify-center items-center h-screen w-full bg-[url('/about-background.png')] bg-cover bg-no-repeat bg-center">
                        <div className="text-white text-center md:max-w-[75%] lg:max-w-[60%] mx-5 m-auto ">

                              <h1 className="font-podcast text-[72px] font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-[100%] ">{title}</h1>
                              <h3 className="text-2xl font-bold mt-4">{description}</h3>
                              <button className=" text-[20px] font-semibold px-6 py-3.5 border rounded-[50px] mt-6 ">{button}</button>
                              
                        </div>
                  </header>
            </div>
      )
}

export default AboutHero
