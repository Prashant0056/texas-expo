import { useState, useEffect, useRef } from 'react';
import { Media } from '@/payload-types';
import { fetchParticipants } from '@/action/participants';

export interface Participant {
    collegeName: string;
    participantNumber: number;
    photo: Media | string;
}


const useFetchData = () => {
    const [data, setData] = useState<Participant[]>([]);  
    const [toggle, setToggle] = useState<boolean>(false);

    const prevDataRef = useRef<Participant[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchParticipants();
            const newData: Participant[] = response.docs;

            if (prevDataRef.current) {
                const isNewData = JSON.stringify(prevDataRef.current) !== JSON.stringify(newData);
                if (isNewData) {
                    setToggle((prev) => !prev); 
                }
            }

            prevDataRef.current = newData; 
            setData(newData); 
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

        return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
    }, []);

    useEffect(() => {
        if (toggle) {
            // Reset toggle after 5 seconds if it's been toggled
            const resetToggleTimeout = setTimeout(() => {
                setToggle(false);
            }, 5000);

            // Cleanup the timeout when component unmounts or when toggle is reset
            return () => clearTimeout(resetToggleTimeout);
        }
    }, [toggle]);

    return { data, toggle };
};

export default useFetchData;
