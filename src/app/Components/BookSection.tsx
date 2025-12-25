'use client'
import Image from "next/image"

function BookSection() {
      return (
            <div className="relative grid grid-cols-1 xl:grid-cols-2 bg-[url(/background.png)] bg-cover bg-no-repeat py-15 px-5 md:px-10 lg:px-20 xl:px-37.5 2xl:px-62.5">
                  <form className="bg-[#FFFFFF4D] px-8.5 py-7.5 rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 ">
                              <div>
                                    <label htmlFor="nameANDsurname" className="block mb-2">Name and Surname</label>
                                    <input type="text" id="nameANDsurname"
                                          className="w-full px-6 py-3.5 rounded-lg bg-white"
                                          placeholder="Enter your name and surname">
                                    </input>
                              </div>

                              <div>
                                    <label htmlFor="email" className="block mb-2">Email Address</label>
                                    <input type="email" id="email"
                                          className="w-full px-6 py-3.5 rounded-lg bg-white"
                                          placeholder="Enter your email address">
                                    </input>
                              </div>

                              <div>
                                    <label htmlFor="phoneNumber" className="block mb-2">Telephone Number</label>
                                    <input type="text" id="phoneNumber"
                                          className="w-full px-6 py-3.5 rounded-lg bg-white"
                                          placeholder="Enter your telephone number"></input>
                              </div>

                              

                              <div>
                                    <label htmlFor="options" className="block mb-2">Service Type</label>
                                    <select id="options"
                                          required
                                          className="w-full px-6 py-3.5 rounded-lg bg-white appearance-none border border-gray-300 invalid:text-[#333333]"
                                          style={{
                                                backgroundImage: `url("/arrow-down.png")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 1rem center',
                                                backgroundSize: '1.5em'
                                          }}>
                                          <option className="text-[#333333]" value="" disabled>Select the service type</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                    </select>
                              </div>

                              

                              <div className="relative w-full group">
                                    <label htmlFor="time" className="block mb-2 ">Date</label>

                                    <div className="relative">
                                          <input
                                                type="text"
                                                id="time"
                                                placeholder="Select the date"
                                                onFocus={(e) => (e.target.type = "date")}
                                                onBlur={(e) => {
                                                      if (!e.target.value) e.target.type = "text";
                                                }}
                                                className="w-full px-6 py-3.5 rounded-lg bg-white outline-none border border-gray-200 focus:border-blue-500 appearance-none"
                                          />
                                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:hidden">
                                                <img src="/system-uicons_calendar-month.png"></img>
                                          </div>
                                    </div>
                              </div>

                              <div>
                                    <div className="relative w-full group">
                                          <label htmlFor="time" className="block mb-2 ">Time</label>

                                          <div className="relative">
                                                <input
                                                      type="text"
                                                      id="time"
                                                      placeholder="Select the time"
                                                      onFocus={(e) => (e.target.type = "time")}
                                                      onBlur={(e) => {
                                                            if (!e.target.value) e.target.type = "text";
                                                      }}
                                                      className="w-full px-6 py-3.5 rounded-lg bg-white outline-none border border-gray-200 focus:border-blue-500 appearance-none"
                                                />
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:hidden">
                                                      <img src="/system-uicons_clock.png"></img>
                                                </div>
                                          </div>
                                    </div>

                              </div>


                        </div>
                        <input type="submit" value="Book Now" className="block  bg-[#FA8B02] text-white px-6 py-2.5 rounded-[50px] mx-auto mt-7.5"></input>
                  </form>
                  <Image src="/bike-picture.png" alt="bike" width={724} height={542} className="hidden xl:block md:w-87.5 xl:w-181 xl:absolute xl:-bottom-10 xl:right-0 "></Image>
            </div>
      )
}

export default BookSection
