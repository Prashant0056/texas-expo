"use client";

import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    // Extract date and time separately
    const date = currentDateTime.toLocaleDateString(); // Formats the date
    const time = currentDateTime.toLocaleTimeString(); // Formats the time

    return (
        <div className="text-right  ">
            <p>{time}</p>
            <p>{date}</p>
        </div>
    );
};

export default DateTimeDisplay;
