'use client'
import Image from "next/image"
import { NavbarProps } from "../Interfaces/interfaces"
import Link from "next/link"
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Added IoClose for the X button
import { usePathname, useRouter } from "next/navigation";
import "../globals.css"

function Navbar({ image, links }: NavbarProps) {
      const router = useRouter();
      const pathname = usePathname()

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      // 1. New state for the Login Modal
      const [isLoginOpen, setIsLoginOpen] = useState(false);

      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

      return (
            <>
                  <nav className="fixed z-10 top-0 left-0 w-full bg-white/10 backdrop-blur-sm py-5 flex justify-between md:items-center md:justify-between px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5 text-[18px] md:text-[20px] font-semibold text-white">
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-22.5 sm:w-25 md:w-27.5 lg:w-30 xl:w-33.25 h-auto" />

                        <ul className="hidden md:flex items-center gap-[clamp(16px,1.8vw,40px)]">
                              {links.map((link, index) => (
                                    <Link href={link.href} key={index} className={`${pathname === link.href ? "border-b-2 border-orange-400" : ""} `}>
                                          {link.name}
                                    </Link>
                              ))}
                        </ul>

                        <div className="hidden md:flex md:gap-5 items-center">
                              <select className="bg-transparent border-none outline-none cursor-pointer">
                                    <option className="text-black">Eng</option>
                                    <option className="text-black">Arb</option>
                              </select>

                              <button onClick={() => router.push("/login")} className="hover:text-orange-400 transition">Login</button>

                              <button onClick={() => { router.push("/signup") }} className="bg-[#FA8B02] py-2.5 rounded-[50px] w-full md:w-35 lg:w-38.5 2xl:w-42 text-white">Sign Up</button>
                        </div>

                        <button className="text-white md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                              <IoMenu className="text-[28px]" />
                        </button>

                        {isMenuOpen && (
                              <div className="fixed inset-0 top-24 z-50 flex flex-col p-6 space-y-4 md:hidden bg-black/90">
                                    {links.map((link, index) => (
                                          <Link href={link.href} key={index} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                                    ))}
                                    <div className="flex flex-col gap-4">
                                          <button onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }} className="text-left">Login</button>
                                          <Link href="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                                    </div>
                              </div>
                        )}
                  </nav>

                  {isLoginOpen && (
                        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                              <div className="bg-white w-full max-w-112.5 rounded-2xl p-8 relative text-black shadow-2xl">
                                    <button
                                          onClick={() => setIsLoginOpen(false)}
                                          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                                    >
                                          <IoClose size={24} />
                                    </button>
                                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                                    <form className="flex flex-col gap-4">
                                          <div>
                                                <label className="text-sm font-medium mb-1 block">Email Address</label>
                                                <input
                                                      type="email"
                                                      placeholder="Enter your email address"
                                                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-orange-400"
                                                />
                                          </div>

                                          <div>
                                                <label className="text-sm font-medium mb-1 block">Password</label>
                                                <input
                                                      type="password"
                                                      placeholder="Enter your password"
                                                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-orange-400"
                                                />
                                                <div className="text-right mt-1">
                                                      <button type="button" className="text-[11px] text-gray-500 hover:underline">Forgot your password?</button>
                                                </div>
                                          </div>

                                          <button className="bg-[#FA8B02] text-white font-bold py-3 rounded-lg mt-2 hover:bg-orange-600 transition">
                                                Sign In
                                          </button>

                                          <div className="flex items-center gap-2 my-2">
                                                <div className="flex-1 bg-gray-200"></div>
                                                <span className="text-xs text-gray-400">or</span>
                                                <div className="flex-1  bg-gray-200"></div>
                                          </div>

                                          <button
                                                type="button"
                                                className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
                                          >
                                                <Image src="/google-logo.svg" alt="Google" width={20} height={20} />
                                                <span className="text-sm font-semibold text-gray-600">Sign In with Google</span>
                                          </button>
                                    </form>

                                    <p className="text-center text-sm mt-8 text-gray-600">
                                          Don't have an account? <span className="text-orange-500 font-bold cursor-pointer hover:underline">Sign Up</span>
                                    </p>
                              </div>
                        </div>
                  )}
            </>
      )
}

export default Navbar