import React, { useState } from "react";
import { data } from "./data/data.js";
import Event from "./components/Event.jsx";

const App = () => {
  return (
    <div className=" bg-black">
      <div className="container mx-auto px-2 sm:px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  h-full mx-auto">
          {data.map((event) => (
            <div key={event?.id || Math.random()} className="h-full">
              <Event event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
