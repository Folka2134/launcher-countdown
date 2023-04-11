import "./App.css";
import backgroundStars from "./assets/images/bg-stars.svg";
import backgroundHills from "./assets/images/pattern-hills.svg";

function App() {
  return (
    <div className="App h-screen bg-gradient-to-b from-[#191A24] via-[#1E1F29] to-[#343650] flex justify-center font-red-hat">
      {/* <img src={backgroundStars} alt="" /> */}
      <div className="bg-pattern-stars h-full bg-no-repeat w-full absolute "></div>
      <div className="bg-pattern-hill h-48 bg-no-repeat bg-cover w-full bottom-0 absolute"></div>
      <div className="p-6 mt-48 md:mt-72">
        <h1 className="text-3xl text-center text-white uppercase tracking-widest ">
          We're Launching Soon
        </h1>
        <div className="mt-32 flex justify-evenly text-center">
          <div className="flex flex-col">
            <h1 className="text-7xl text-[#FB6087]">08</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Days</h6>
          </div>
          <div className="flex flex-col">
            <h1 className="text-7xl text-[#FB6087]">08</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Hours</h6>
          </div>
          <div className="flex flex-col">
            <h1 className="text-7xl text-[#FB6087]">08</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Minutes</h6>
          </div>
          <div className="flex flex-col">
            <h1 className="text-7xl text-[#FB6087]">08</h1>
            <h6 className="text-sm text-[#8486A9] uppercase mt-3">Seconds</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
