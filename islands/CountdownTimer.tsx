import { useEffect, useState } from 'preact/hooks';

export default function CountdownTimer() {
 var enddate = "June 7th, 2024, 1:20 PM"
 var lastday = new Date(2024, 5, 7, 13, 20).getTime(); // Convert Date object to timestamp
 if (Date.now() > lastday) {
   enddate = "June 13th, 2025, 1:20 PM"
   lastday = new Date(2025, 5, 13, 13, 20).getTime()
 } 
 const [timeDifference, setTimeDifference] = useState(calculateTimeDifference());
 useEffect(() => {
    const interval = setInterval(() => {
      setTimeDifference(calculateTimeDifference());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on component unmount
 }, []);

 function calculateTimeDifference() {
    const today = Date.now();
    const diffInMilliseconds = lastday - today;

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);
    if (diffInMilliseconds < 1) {
      console.log("yippee")
    } 
    return { days, hours, minutes, seconds };
 }

 return (
  <div className="flex flex-col justify-center items-center">
    <div>
      <p className="text-3xl tabular-nums">{timeDifference.days} day{(timeDifference.days == 1) ? '':'s' }, {timeDifference.hours} hour{(timeDifference.hours == 1) ? '':'s'}, {timeDifference.minutes} minute{(timeDifference.minutes == 1)?'':'s'}, {timeDifference.seconds} second{(timeDifference.seconds == 1)?'':'s'}</p>
    </div>
    <div>
      <code>until {enddate}</code>
    </div>
  </div>
);
}
