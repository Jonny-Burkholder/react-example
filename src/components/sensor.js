import { useState, useEffect } from "react";

async function getValues(){
    try{
    const response = await fetch('/api/dht11')
    return await response.json();
    }catch(error) {
        return [];
    }
}

export default function Sensor() {
    const initResponse = getValues();
    const [temp, setTemp] = useState(() => initResponse.temp);
    const [humidity, setHumidity] = useState(() => initResponse.humidity);
    const [index, setIndex] = useState(() => initResponse.humidity);

    useEffect(() => {
        const interval = setInterval(() => {
            const response = getValues();
            setTemp(() => response.temp);
            setHumidity(() => response.humidity);
            setIndex(() => response.index);
        }, 500);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
        <div className="sensor">
            <p>Temperature: {temp}</p>
            <p>Humidity: {humidity}</p>
            <p>Heat Index: {index}</p>
        </div>
        </>
    )

}