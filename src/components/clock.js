import {useState, useEffect} from "react";

export default function Clock(){
    const [time, setTime] = useState(() => new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="clock">
                <p>{time}</p>
            </div>
        </>
    );
};