"use client";

import TriggerWelcome from "./trigger-button";
import { WelcomeProvider } from "../_components/welcome-context";

const TriggerPage = () => {

    return (
        <WelcomeProvider>
            <TriggerWelcome />
        </WelcomeProvider>
    )
}

export default TriggerPage;