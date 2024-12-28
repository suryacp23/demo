import React from "react";

const Event = ({ event }) => {
  return (
    <div className=" text-white font-mochiy h-[45vh] sm:h-screen  max-w-2xl flex items-center justify-center mx-auto">
      <div className="flex flex-col h-full sm:h-5/6 w-full mx-auto bg-gray-900 justify-center items-center rounded-lg">
        <div className="sm:h-3/4 h-2/3 w-full">
          <img
            src={event.imageUrl || "/api/placeholder/400/320"}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="sm:h-1/4 h-1/3 w-full flex flex-col justify-between p-2 sm:p-3 md:p-4">
          <div>
            <h1 className="line-clamp-1 w-full text-sm sm:text-base md:text-lg lg:text-xl font-bold">
              {event.title}
            </h1>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-thin text-orange-500 text-xs sm:text-sm md:text-base">
              {event?.user?.userName || "Anonymous"}
            </p>
            <p className="font-thin text-orange-500 text-xs sm:text-sm md:text-base">
              {event.createdAt || "No date"}
            </p>
          </div>
          <div className="w-full p-2 sm:p-3 rounded-full bg-gray-800 flex items-center justify-between">
            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-yellow-500 rounded-full flex-shrink-0"></div>
            <div className="flex justify-around w-4/5 items-center">
              <div className="flex items-center space-x-1">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-400 font-bold">
                  0
                </span>
                <p className="text-white text-xs sm:text-sm md:text-base">
                  likes
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-400 font-bold">
                  0
                </span>
                <p className="text-white text-xs sm:text-sm md:text-base">
                  comments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
