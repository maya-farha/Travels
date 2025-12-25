import { AboutUs, CardDestinationProps, CustomrReview, FooterColumn, OffersSection, PopulerSection, Service, ServiceCard } from "../Interfaces/interfaces";

export const aboutContent: AboutUs = {
      img: "/about-picture.png",
      alt: "",
      subTitle: "WELCOME TO OUR SITE!",
      title: "We are the best company for your visit",
      description: `After decades of experience, and a whole life in Lucca,
      we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! 
      We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!`
      , statistics: [
            {
                  value: "20+",
                  title: "Years Experience"
            },
            {
                  value: "100+",
                  title: "Happy Customer"
            },
            {
                  value: "15+",
                  title: "Choice of Services"
            },
            {
                  value: "10+",
                  title: "Professional Guides"
            }
      ]
}


export const aboutOffer: AboutUs = {
      img: "/buildings.png",
      alt: "",
      subTitle: "WELCOME TO OUR SITE!",
      title: "We Are The Center Of Lucca To Offer You The Best",
      description: `We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector,
                  with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. 
                  What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!`
      , statistics: [
            {
                  value: "20+",
                  title: "Years Experience"
            },
            {
                  value: "100+",
                  title: "Happy Customer"
            },
            {
                  value: "15+",
                  title: "Choice of Services"
            },
            {
                  value: "10+",
                  title: "Professional Guides"
            }
      ]
}

export const footerData: FooterColumn[] = [
      {
            title: "Services",
            links: [
                  {
                        name: "Bike and Rickshaw rental",
                        href: ""
                  },
                  {
                        name: "Guided Tours of Lucca",
                        href: ""
                  },
                  {
                        name: "Guided Bike Tour of Lucca",
                        href: ""
                  },
                  {
                        name: "Trip In The Tuscan Hills",
                        href: ""
                  },
                  {
                        name: "Transportation With Luxury Cars",
                        href: ""
                  },
                  {
                        name: "Transportation With Luxury Cars",
                        href: "Wine Tours By Bus With Guide"
                  }
            ]
      },
      {
            title: "Home",
            links: [
                  {
                        name: "Home",
                        href: ""
                  },
                  {
                        name: "About Us",
                        href: ""
                  },
                  {
                        name: "Tour Packages",
                        href: ""
                  },
            ]
      },
      {
            title: "Help",
            links: [
                  {
                        name: "Terms of Use",
                        href: ""
                  },
                  {
                        name: "Provicy Policy",
                        href: ""
                  },
            ]
      },
      {
            title: "Help",
            links: [
                  {
                        name: "Terms of Use",
                        href: "",
                        icon: "/ci_location.png"
                  },
                  {
                        name: "Provicy Policy",
                        href: "",
                        icon: "/clarity_phone-handset-solid.png"
                  },
                  {
                        name: "Provicy Policy",
                        href: "",
                        icon: "/fluent_mail-16-filled.png"
                  },
            ]
      }
]

export const offersData: OffersSection = {
      title: "Get Special Offers for Organizations",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      bttn: "Contact Us",
      image: "/image-offers.png"
}

export const serviceCard: ServiceCard[] = [
      {
            image: "/wishes_icon.png",
            alt: "icon_service",
            title: "Complete Packages For All Your Wishes"
      },
      {
            image: "/experience_icon.png",
            alt: "icon_service",
            title: "Over 30 Years Of Experience"
      },
      {
            image: "/icon_guide.png",
            alt: "icon_service",
            title: "Expert Guides For You"
      },
      {
            image: "/icon_best price.png",
            alt: "icon_service",
            title: "Guaranteed fun at the best price!"
      }
]

export const CardsDestination: CardDestinationProps[] = [
      {
            image: "/destination-1.png",
            alt: "destination",
            title: "Lucca Bike Tour",
            price: "34",
            date: "EVERY DAY",
            people: "3-10 PP",
            description: "A tour of the city and its surroundings led by a professional guide ..."
      },
      {
            image: "/destination-2.png",
            alt: "destination",
            title: "Wine tasting In Tuscany",
            price: "34",
            date: "MONDAY",
            people: "10-30 PP",
            description: "The real magic is here where you can enjoy the best Tuscan wine and eat ..."
      },
      {
            image: "/destination-3.png",
            alt: "destination",
            title: "Cinque Terre Tour",
            price: "34",
            date: "TO BE DECIDED",
            people: "10-50 PP",
            description: "Visiting the 5 Terre is a must, and you can never go there enough ..."
      },
      {
            image: "/destination-4.png",
            alt: "destination",
            title: "Siena and Surroundings",
            price: "34",
            date: "TO BE DECIDED",
            people: "5-10 PP",
            description: "Visit the beautiful Siena and the cities that surround it to experience ..."
      },
      {
            image: "/destination-1.png",
            alt: "destination",
            title: "Lucca Bike Tour",
            price: "34",
            date: "EVERY DAY",
            people: "3-10 PP",
            description: "A tour of the city and its surroundings led by a professional guide ..."
      },
      {
            image: "/destination-3.png",
            alt: "destination",
            title: "Cinque Terre Tour",
            price: "34",
            date: "TO BE DECIDED",
            people: "10-50 PP",
            description: "Visiting the 5 Terre is a must, and you can never go there enough ..."
      },
]
export const reviews: CustomrReview[] = [
      {
            image: "/customer.png",
            name: "Lyod Gomez",
            review: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure`
      },
      {
            image: "/customer.png",
            name: "Lyod Gomez",
            review: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure`
      },
      {
            image: "/customer.png",
            name: "Lyod Gomez",
            review: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure`
      },
      {
            image: "/customer.png",
            name: "Lyod Gomez",
            review: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure`
      }
]

export const travels: PopulerSection[] = [

      {
            img: "/travel-1.png",
            title: "BIKE / RICKSHAW",
            days: "10",
            service: [
                  {
                        image: "/icon_one day.png",
                        alt: "icon_service",
                        title: "Your bike for a day"
                  },
                  {
                        image: "/icon_map.png",
                        alt: "icon_service",
                        title: "City App"
                  },
                  {
                        image: "/icon_city map.png",
                        alt: "icon_service",
                        title: "City App"
                  },
                  {
                        image: "/icon_support.png",
                        alt: "icon_service",
                        title: "Guaranteed Support"
                  }
            ]
      },
      {
            img: "/travel-2.png",
            title: "BIKE TOURS",
            days: "30",
            service: [
                  {
                        image: "/icon_mountain bike.png",
                        alt: "icon_service",
                        title: "A Mountain Bike Included"
                  },
                  {
                        image: "/icon_guide.png",
                        alt: "icon_service",
                        title: "A Guide For You"
                  },
                  {
                        image: "/icon_water.png",
                        alt: "icon_service",
                        title: "Bottle of water"
                  },
                  {
                        image: "/icon_support.png",
                        alt: "icon_service",
                        title: "Guaranteed Support"
                  }
            ]
      },
      {
            img: "/travel-3.png",
            title: "BUS TRIPS",
            days: "45",
            service: [
                  {
                        image: "/icon_ticket.png",
                        alt: "icon_service",
                        title: "Park ticket"
                  },
                  {
                        image: "/icon_bus.png",
                        alt: "icon_service",
                        title: "Return bus"
                  },
                  {
                        image: "/icon_companion.png",
                        alt: "icon_service",
                        title: "Companion"
                  },
                  {
                        image: "/icon_support.png",
                        alt: "icon_service",
                        title: "Guaranteed Support"
                  }
            ]
      },
      {
            img: "/travel-4.png",
            title: "TRANSFER",
            days: "10",
            service: [
                  {
                        image: "/icon_driver.png",
                        alt: "icon_service",
                        title: "Park ticket"
                  },
                  {
                        image: "/icon_location.png",
                        alt: "icon_service",
                        title: "Return bus"
                  },
                  {
                        image: "/icon_best price.png",
                        alt: "icon_service",
                        title: "Companion"
                  },
                  {
                        image: "/icon_support.png",
                        alt: "icon_service",
                        title: "Guaranteed Support"
                  }
            ]
      }
]

export const SevicesContent: Service[] = [
      {
            image: "/service1.png",
            alt: "",
            title: "Bike and rickshaw rental",
            description: "Book your quality vehicle quickly for an hour or all day!"
      },
      {
            image: "/service2.png",
            alt: "",
            title: "Guided tour of the countryside",
            description: "Live the real Lucchese experience by visiting the suburbs by bike!"
      },
      {
            image: "/service3.png",
            alt: "",
            title: "Taxi and NCC service",
            description: "Do you need not only a bike but also a driver? Then you have found the right place!"
      },
      {
            image: "/service4.png",
            alt: "",
            title: "Bus Package",
            description: "Do you need not only a bike but also a driver? Then you have found the right place!"
      }
]