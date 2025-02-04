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

    return (
        <div className="text-right  ">
            <p>{currentDateTime.toLocaleDateString()}</p>
            <p>{currentDateTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default DateTimeDisplay;
