import { useEffect, useRef, useState } from "react";

const Workout = ({ title, description, time, onComplete }) => {
  const workout = useRef();
  const [remainingTime, setRemainingTime] = useState(time * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && remainingTime > 0) {
      workout.current = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      clearTimeout(workout.current);
      onComplete();
      setIsActive(false);
    }
    return () => clearTimeout(workout.current);
  }, [isActive, remainingTime, onComplete]);
  function handleStart() {
    setIsActive(true);
  }

  function handleStop() {
    clearTimeout(workout.current);
    setIsActive(false);
    setRemainingTime(time * 60);
    onComplete();
  }
  return (
    <div className="bg-green-600 p-2 rounded-md m-2 w-[250px] flex items-center flex-col text-white">
      <div>
        <h1 className=" font-extrabold text-2xl">{title}</h1>
        <p>{description}</p>
        <p>{time} minutes</p>
      </div>
      <div className="">
        <button
          onClick={handleStart}
          className=" border p-1 m-2 rounded bg-green-950"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className=" border p-1 m-2 rounded bg-green-950"
        >
          Stop
        </button>
      </div>
      <h1>
        {
          <p>
            {Math.floor(remainingTime / 60)} minutes {remainingTime % 60}{" "}
            seconds
          </p>
        }
      </h1>
    </div>
  );
};

export default Workout;
