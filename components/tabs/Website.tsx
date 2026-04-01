import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Website() {
    const tabs = ["whoami", "projects", "contact"];
    const [index, setIndex] = useState<number>(0);

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
                break;

            // Espaço
            case ' ':
                e.preventDefault();
                break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {

    }, [index]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start mt-3">
                {
                    tabs.map((tab, i) => 
                        <p 
                            key={i}
                            className={cn(
                                "text-base",
                                i == index ? "text-white" : "text-gray-500"
                            )}
                        >
                            {
                                i == index ? 
                                `> [${tab}]` 
                                : 
                                tab
                            }
                        </p>
                    )
                }
            </div>
            
            <p className="text-bold">
                ↑ and ↓ or W and S to navigate, ENTER to select
            </p>
        </div>
    );
}