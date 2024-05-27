import { useEffect, useState } from "react";
function TimeCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString("vi-VN", { hour12: false });
  };

  const formatDate = (time: Date) => {
    return time.toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-fit p-4 border border-blue-500 rounded-lg">
      <div className="text-4xl text-blue-500 font-bold">{formatTime(time)}</div>
      <div className="text-lg text-purple-600 mt-2">{formatDate(time)}</div>
    </div>
  );
}

export default TimeCard;
