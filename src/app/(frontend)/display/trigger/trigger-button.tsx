"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";



const TriggerWelcome = () => {
 
    const router = useRouter();

    // Toggle query param between true and false
    const toggleWelcome = () => {
      const currentWelcomeState = router.query.welcome === 'true'; // Check the current state
      const newWelcomeState = currentWelcomeState ? 'false' : 'true'; // Toggle between true/false
  
      // Update the query parameter without reloading the page
      router.push({
        pathname: router.pathname,
        query: { ...router.query, welcome: newWelcomeState },
      });
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