"use client";


import { useRouter } from 'next/navigation';  // Import from next/navigation
import { useSearchParams } from 'next/navigation';  // Import useSearchParams from next/navigation
import React from 'react';
import { Button } from "@/components/ui/button";



const TriggerWelcome = () => {

  const router = useRouter();
  const searchParams = useSearchParams(); // Access search params
  const welcomeParam = searchParams.get('welcome'); // Get the current value of the 'welcome' query parameter

  // Toggle query param between true and false
  const toggleWelcome = () => {
    const newWelcomeState = welcomeParam === 'true' ? 'false' : 'true'; // Toggle between true/false

    // Update the query parameter without reloading the page
    const newUrl = new URL(window.location.href); // Get the current URL
    newUrl.searchParams.set('welcome', newWelcomeState); // Set the new query parameter

    router.push(newUrl.toString()); // Update the URL with the new query parameter
  };


    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Button variant={"default"} onClick={toggleWelcome}>
                Trigger welcome
            </Button>
        </div>
    )
}

export default TriggerWelcome;