"use client"; 
import AboutComponent from "./Components/AboutComponent";
import Offers from "./Components/Offers";
import Services from "./Components/Services";
import BookSection from "./Components/BookSection";
import Popular from "./Components/Popular";
import HeroHome from "./Components/HeroHome";
import { aboutContent, CardsDestination, offersData, reviews } from "./data/data";
import SliderContent from "./Components/SliderContent";
import CardDestination from "./Components/CardDestination";
import CustomerCard from "./Components/CustomerCard";
export default function Home() {

      return (
            <div className="">
                  <main className="">
                        <HeroHome></HeroHome>
                        <SliderContent
                              title="Explore Our Popular Destinantions "
                              data={CardsDestination}
                              slidesPerView={4}
                              centeredSlides={true}
                              spaceBetween={33}
                              breakpoints={{
                                    300: {
                                          slidesPerView: 1,
                                          spaceBetween: 10,
                                    },
                                    640: {
                                          slidesPerView: 2,
                                          spaceBetween: 18,
                                    },
                                    1024: {
                                          slidesPerView: 3,
                                          spaceBetween: 20,
                                    },
                                    1280: {
                                          slidesPerView: 4,
                                          spaceBetween: 33,
                                    },
                              }}
                              renderItem={(item) => <CardDestination cardContent={item} />}
                        />
                        <AboutComponent aboutContent={aboutContent}></AboutComponent>

                        <Offers content={offersData}></Offers>
                        <Services></Services>
                        <BookSection></BookSection>
                        <Popular></Popular>

                        <SliderContent
                              title="Happy Customers Says "
                              data={reviews}
                              centeredSlides={true}
                              spaceBetween={33}
                              breakpoints={{
                                    300: {
                                          slidesPerView: 1,
                                          spaceBetween: 10,
                                    },
                                    640: {
                                          slidesPerView: 1,
                                          spaceBetween: 18,
                                    },
                                    1280: {
                                          slidesPerView: 2,
                                          spaceBetween: 33,
                                    },
                              }}
                              renderItem={(item) => <CustomerCard customer={item} />}
                        />
                  </main>
            </div>
      );
}
