import useIsTouch from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Tab = "./website" | "whoami" | "projects" | "contact";

export default function Website({ setTab }: { setTab: React.Dispatch<React.SetStateAction<Tab>> }) {
    const tabs: Tab[] = ["whoami", "projects", "contact"];
    const [index, setIndex] = useState<number>(0);

    const isTouch = useIsTouch();
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    setIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
                    break;
    
                case 'ArrowDown':
                case 's':
                case 'S':
                    setIndex((prev) => (prev + 1) % tabs.length);
                    break;
    
                
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    setTab(tabs[index]);
                    break;
            }
    
            console.log(e.key);
            console.log(index);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [index]);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-start mt-3">
                {
                    tabs.map((tab, i) => {
                        return (
                            <button
                                onClick={() => {
                                    if (i == index) {
                                        setTab(tab);
                                        return;
                                    }

                                    setIndex(i);
                                }} 
                                key={i}
                                className={cn(
                                    "text-base transition-all cursor-pointer",
                                    i == index ? "text-xl font-bold" : "text-white"
                                )}
                            >
                                {
                                    i == index ? 
                                    `> [${tab}]` 
                                    : 
                                    tab
                                }
                            </button>
                        )}
                    )
                }
            </div>
            
            <p className="text-sm text-gray-400 mt-8 opacity-40">
                {
                    isTouch ? "tap on the options to navigate" : "↑ and ↓ or W and S to navigate, ENTER to select"
                }
            </p>
        </div>
    );
}