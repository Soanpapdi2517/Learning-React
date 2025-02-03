import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Time Running");
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Time Stopped");
    };
  }, []);
  return (
    <h2 class="tracking-wide my-1.5 font-sans hover:font-serif">
      This is the Current Date & time:
      <span class="my-1">
        {" "}
        {time.toLocaleDateString()} - {time.toLocaleTimeString()}
      </span>
    </h2>
  );
}

export default Time;
