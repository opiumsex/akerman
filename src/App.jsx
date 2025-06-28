import React, { useState } from "react";
import Assemblies from "./pages/Assemblies";
import Redesigns from "./pages/Redesigns";
import About from "./pages/About";

const App = () => {
  const [tab, setTab] = useState("assemblies");

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        {tab === "assemblies" && <Assemblies />}
        {tab === "redesigns" && <Redesigns />}
        {tab === "about" && <About />}
      </div>
      <div className="flex justify-around bg-black border-t border-white py-2">
        {["assemblies", "redesigns", "about"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`${
              tab === item ? "text-black bg-white scale-105" : "text-white"
            } px-4 py-2 rounded-2xl transition-all`}
          >
            {item === "assemblies"
              ? "Сборки"
              : item === "redesigns"
              ? "Редизайны"
              : "О приложении"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
