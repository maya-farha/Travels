'use client'

import Image from "next/image";
import { FooterColumn } from "../Interfaces/interfaces";

interface Props {
      data: FooterColumn[];
}

const Footer = ({ data }: Props) => {
      return (

            <footer className=" bg-[#333333] py-10 px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5">
                  <Image src="/logo.png" alt="logo_icon" width={133} height={130}  className="mb-8.25"></Image>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 justify-between border-t border-b border-[#ffffff1a] pt-8.25 pb-8.25">

                  {data.map((column, index) => (
                        <div key={index} className="text-white">
                              <h3 className="text[20px] font-extrabold mb-5" >{column.title}</h3>

                              <ul >
                                    {column.links.map((link, linkIndex) => (
                                          <li key={linkIndex} style={{ marginBottom: '12px' }}>
                                                <a
                                                      href={link.href}
                                                      className="flex gap-2.5"
                                                >
                                                      {link.icon && (
                                                            <img
                                                                  src={link.icon}
                                                                  alt=""
                                                            />
                                                      )}
                                                      <span>{link.name}</span>
                                                </a>
                                          </li>
                                    ))}
                              </ul>
                              
                        </div>
                  ))}
            </div>
                  <strong className="block pt-8.25 text-center text-white">Copyright © 2022.  All rights reserved.</strong>
            </footer>

      );
};

export default Footer;