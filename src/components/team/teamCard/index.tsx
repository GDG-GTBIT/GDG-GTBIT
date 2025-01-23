import React from "react";

const MeetTheTeam = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
   
      <div className="text-center text-white mb-10">
        <h1 className="text-4xl font-bold mb-4">MEET THE TEAM</h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Here’s our team — the faces behind GDG GTBIT. We’re a group of passionate individuals working together to create, innovate, and grow as a community.
        </p>
      </div>


      <div className="flex items-center justify-center">
   
        <div
          className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl p-6 text-center w-[400px] shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)", 
          }}
        >
          <h2 className="text-xl font-semibold mb-2 text-white">ML Team</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard.
          </p>
          <div className="flex items-center justify-center relative">
    
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white rounded-full border-[2px] border-blue-500"
                  style={{
                    marginLeft: index === 0 ? "0" : "-10px",
                  }}
                ></div>
              ))}
       
            <button className="absolute right-[-10px] bg-white text-black font-medium px-4 py-1 text-sm rounded-full border-[2px] border-gray-300 shadow-md hover:shadow-lg">
              See more →
            </button>
          </div>
        
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent rounded-xl blur-md opacity-20"></div>
        </div>

   
        <div className="relative ml-10">

          <img
            src="/images/01227a1b8d4fed656c99b71a9dd644d3.png"
            alt="Building Icon"
            className="w-80"
          />

          <img
            src="/images/d8e2c7828281af2bc7c4426ea0aefac4.png" 
            alt="Logo"
            className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-7 h-7 translate-y-[60%]"
          />
          <img
            src="/images/1c692522660313d9d9c9b71b011bf5d8.png" 
            alt="Logo"
            className="absolute top-[-10%] left-[40%] translate-x-[-34%] w-7 h-7 translate-y-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
