"use client"
import Link from 'next/link';
import { IAuthProps } from '../Interfaces/interfaces';
import { useRouter } from 'next/navigation';

export default function AuthForm({ mode, inputs }: IAuthProps) {
      const isLogin = mode === "login";
      const router = useRouter(); 


      return (
            <div className="w-full max-w-122 bg-white px-14.75 py-10 rounded-3xl ">
                  <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-black">
                              {isLogin ? "Login" : "Sign Up"}
                        </h2>

                        <button
                              onClick={() => router.back()}
                              className="text-gray-400 hover:text-gray-700 transition-colors p-1"
                        >
                              X
                        </button>
                  </div>

                  <form className="flex flex-col gap-4">
                        {inputs.map((input, index) => (
                              <div key={index} className="">
                                    <label className="text-[18px] font-semibold text-[#333333] opacity-60 mb-2.5">{input.label}</label>
                                    <input
                                          name={input.name}
                                          type={input.type}
                                          placeholder={input.placeholder}
                                          className="w-full border border-gray-300 rounded-lg px-6 py-3.5 text-sm text-black focus:outline-[#FA8B02]"
                                    />
                              </div>
                        ))}

                        {isLogin && (
                              <div className="text-right -mt-2">
                                    <button type="button" className="text-[14px] text-[#33333399] hover:underline">
                                          Forgot your password?
                                    </button>
                              </div>
                        )}
                        {!isLogin && (
                              <div className="text-right -mt-2">
                                    <div className='flex items-center gap-1 mt-5'>

                                          <input
                                                type="checkbox"
                                                className="w-4 h-4 accent-[#FA8B02] cursor-pointer"
                                          />
                                          <p className='text-[#33333399]'> I agree with <span className='text-[#FA8B02]'>Terms</span> and <span className='text-[#FA8B02]'>Privacy</span></p>
                                    </div>
                                    
                              </div>
                        )}

                        <button className="w-full bg-[#FA8B02] text-[20px] text-white font-semibold py-3.5 rounded-[50px] mt-2 hover:bg-orange-600 transition shadow-sm">
                              {isLogin ? "Sign In" : "Sign Up"}
                        </button>
                  </form>

                  <div className="text-center text-[#333333] opacity-40">
                        <span className="text-[16px]">or</span>
                  </div>

                  <button className="w-full border border-gray-300 py-3 px-6 rounded-[50px] flex items-center justify-between gap-2 hover:bg-gray-50 transition ">
                        <img src="/grommet-icons_google.png" alt="G" />
                        <span className='w-full text-[#333333] opacity-40'>Sign In with Google</span>
                  </button>

                  <p className="text-center text-sm mt-8 text-gray-500">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <Link
                              href={isLogin ? "/signup" : "/login"}
                              className="text-[#FA8B02] font-semibold hover:underline"
                        >
                              {isLogin ? "Sign Up" : "Login"}
                        </Link>
                  </p>
            </div>
      );
}