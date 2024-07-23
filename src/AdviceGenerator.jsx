import { useState, useEffect } from "react";
import axios from "axios";
// import './AdviceGenerator.css';
import dice from "./images/icon-dice.svg";
import divider from "./images/pattern-divider-desktop.svg";
const AdviceGenerator = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    console.log(response.data);
    setAdvice(response.data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-[#1F2A39] h-screen flex justify-center items-center text-[24px]">
      <div className="w-[90%] sm:w-[40%] relative">
        <div>
          {advice && (
            <div className="mt-4 p-10 sm:p-16 bg-[#2C3546] shadow-md rounded-md text-center ">
              <h2 className="text-lg font-semibold text-[#2AF598] uppercase">
                Advice #{advice.id}
              </h2>
              <p className="text-white text-center mt-5">{advice.advice}</p>
              <div className="mt-10 mb-6 xl:mb-0">
                <img src={divider} alt="Divider" className="w-full" />
              </div>
            </div>
          )}
        </div>
        <button className="button mt-4 bg-[#2AF598] p-4 rounded-full absolute top-[85%] left-[42%] xl:left-[46%]" onClick={fetchAdvice}>
          <img src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
};

export default AdviceGenerator;
