import { useState } from "react";
import Workout from "./components/Workout";
const workoutList = [
  {
    title: "Pushups",
    description: "Do 30 pushups",
    time: 1000 * 60 * 3,
  },
  {
    title: "Squats",
    description: "Do 30 squats",
    time: 1000 * 60 * 2,
  },
  {
    title: "Pullups",
    description: "Do 10 pullups",
    time: 1000 * 60 * 3,
  },
];

function App() {
  const [finishedWorkouts, setFinishedWorkouts] = useState([]);
  function handleWorkoutCompletion(title) {
    setFinishedWorkouts((prevCompletedWorkout) => [
      ...prevCompletedWorkout,
      title,
    ]);
    console.log(finishedWorkouts);
  }
  return (
    <>
      <main className="bg-green-300 w-[80%] mx-auto h-screen">
        <h1 className="text-green-950 text-2xl font-extrabold text-center ">
          Select a workout
        </h1>
        <ul className=" w-full flex  justify-center">
          {workoutList.map((workout) => (
            <li key={workout.title} className="">
              <Workout
                time={workout.time / (1000 * 60)}
                description={workout.description}
                title={workout.title}
                onComplete={() => {
                  handleWorkoutCompletion(workout.title);
                }}
              />
            </li>
          ))}
        </ul>
        <div className="w-full rounded-lg flex flex-col justify-center items-center">
          <h1 className=" text-green-950 text-2xl font-extrabold text-center">
            Completed Workouts
          </h1>
          <div className="">
            {finishedWorkouts.map((finishedWorkout, index) => (
              <div key={index}>
                <p className="bg-lime-700 my-1 p-1 rounded-md w-80">
                  {finishedWorkout}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
