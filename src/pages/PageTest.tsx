import { useEffect, useState } from "react";

export default function TestPage() {
  const [seconds, setSeconds] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {      setSeconds(seconds + 1);    }, 1000);       
    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <h1>Number of seconds is {seconds}</h1>
    </div>
  );
}