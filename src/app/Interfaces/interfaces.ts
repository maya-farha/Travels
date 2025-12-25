import { SwiperOptions } from "swiper/types"

export interface Image {
      src: string
      alt: string
      width: number
      height: number
}
export interface Link {
      name: string
      href: string
      icon?: string
}

export interface NavbarProps {
      image: Image
      links: Link[]
}

export interface Option {
      img: string,
      title: string,
      disabled: string
      option: string[]
}

export interface Statistics {
      value: string,
      title: string
}

export interface AboutUs {
      img: string,
      alt: string
      subTitle: string,
      title: string,
      description: string,
      statistics: Statistics[]
}

export interface OffersSection {
      title: string,
      description: string,
      bttn: string
      image: string
}

export interface Service {
      image: string,
      alt: string,
      title: string,
      description?: string
}

export interface PopulerSection {
      img: string,
      title: string,
      days: string,
      service: Service[]
}

export interface FooterColumn {
      title: string,
      links: Link[]
}
export interface HeroAbout {
      title: string,
      description: string,
      button: string
}

export interface ServiceCard {
      image: string,
      alt:string
      title: string
}

export interface Input {
      label: string;
      type: "text" | "email" | "password";
      placeholder: string;
      name: string;
}

export interface IAuthProps {
      mode: "login" | "signup"; 
      inputs: Input[];         
}

export interface CardDestinationProps{
      image:string,
      alt:string
      title:string,
      price:string,
      date:string,
      people:string,
      description:string
}

export interface SliderProps<T> extends SwiperOptions {
      data: T[];
      renderItem: (item: T) => React.ReactNode;
      title?: string;
}

export interface CustomrReview{
      image:string,
      name:string
      review:string
}