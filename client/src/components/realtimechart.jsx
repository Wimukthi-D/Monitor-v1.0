import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const generateRandomData = (length) => {
    const data = [];
    for (let i = 0; i < length; i++) {
        const randomValue = (Math.random() * (37.5 - 27.0) + 27.0).toFixed(1); // Generate random value between 27.0 and 37.5
        data.push({ name: getCurrentTime(), value: parseFloat(randomValue) });
    }
    return data;
};

function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }


const RealTimeLineChart = () => {
    const [data, setData] = useState(generateRandomData(10));

    const resetfunction = () => {
        let value = (Math.random() * (37.5 - 27.0) + 27.0).toFixed(1);
        if (value <= 27.0) {
            return 27.0;
        } else if (value >= 37.5) {
            return 37.5;
        } else {
            return value;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prevData) => [...prevData.slice(1), { name: getCurrentTime(), value: resetfunction() }]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const yDomain = [15, 40];

    return (
        <div style={{ width: '100%', height: '42vh' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={yDomain} />
                    <Tooltip />
                    <Legend />
                    <Line type="linear" dataKey="value" stroke="#8884d8" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RealTimeLineChart;
