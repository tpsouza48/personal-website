"use client";

import DarkVeil from "@/components/DarkVeil";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Website from "@/pages/Website";
import WhoAmI from "@/pages/WhoAmI";
import useIsTouch from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
    const isTouch = useIsTouch();
    const [tab, setTab] = useState<"./website" | "whoami" | "projects" | "contact">("./website");

    useEffect(() => {
        if(tab == "./website") return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {    
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    returnFn();
                    break;
                }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [tab]);

    const returnFn = () => {
        setTab("./website");
    }

    const getTabComponent = () => {
        switch (tab) {
            default:
            case "./website":
                return <Website setTab={setTab} />;

            case "whoami":
                return <WhoAmI />;

            case "projects":
                return <Projects />;

            case "contact":
                return <Contact />;
        }
    }

    return (
        <main className="relative flex flex-1 flex-col w-screen p-10">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-screen opacity-5 pointer-events-none">
                <DarkVeil
                    speed={0.3}
                    hueShift={60}
                />
            </div>

            <h1 className={cn(
                "w-full text-left text-xl",
                tab != "./website" && "hidden"
            )}>
                <span className="text-green-600">thiago-souza@arch:</span>
                <span className="text-blue-600">~</span>
                $ ./website
            </h1>

            {getTabComponent()}

            {
                tab != "./website" &&
                <button 
                    onClick={() => setTab("./website")}
                    className={cn(
                        "text-sm text-gray-400 mt-12 opacity-40",
                        "cursor-pointer",
                    )}
                >
                    {
                        isTouch ? "tap here to go back to main menu" : "press enter/space or click here to go back to main menu"
                    }
                </button>
            }
        </main>
    );
}
