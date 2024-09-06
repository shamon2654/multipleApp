import React from "react"
import image from "../assets/download.jpeg"
const Home = () => {
  return (
    <div className="flex flex-col pt-5">
      <h1 className="text-3xl">Home page</h1>
      <div className="border-2 border-black shadow-md py-3 shadow-green-400 m-auto w-[50%]">
        <div className=" flex flex-col items-center justify-center font-bold ">
          <h2 className="text-2xl underline">profile Card</h2>
        </div>
        <div className="flex justify-center w-full mt-5 ">
          <div className="">
            <img
              src={image}
              alt=""
              className="w-[150px] h-[150px] rounded-md object-cover border-[3px] border-[#3ae13a]"
            />
          </div>
        </div><div className="flex  justify-center w-full mt-5 ">
                  <div className="flex flex-col mr-10 font-bold">
                      
          <p>Name:shamon</p>
          <p>Email:  shamon@gmail.com</p>
          <p>UserName:shamon2654</p>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Home
