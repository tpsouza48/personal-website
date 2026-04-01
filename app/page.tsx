"use client";

import DarkVeil from "@/components/DarkVeil";
import Website from "@/components/tabs/Website";
import { useEffect, useState } from "react";

export type Tab = "./website" | "whoami" | "projects" | "contact";

export default function Home() {
    const [tab, setTab] = useState<Tab>("./website");

    const getTabComponent = () => {
        switch (tab) {
            case "./website":
                return <Website />;

            case "whoami":
                return <p>Whoami</p>;

            case "projects":
                return <p>Projects</p>;

            case "contact":
                return <p>Contact</p>;
        }
    }

    return (
        <main className="relative flex flex-1 flex-col w-screen p-10">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-screen opacity-10 pointer-events-none">
                <DarkVeil
                    speed={0.3}
                    hueShift={360}
                />
            </div>

            <h1 className="w-full text-left text-xl">
                <span className="text-green-600">thiago-souza@arch:</span>
                <span className="text-blue-600">~</span>
                $ {tab}
            </h1>

            {getTabComponent()}
        </main>
    );
}
