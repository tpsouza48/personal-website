"use client";

import { useEffect, useState } from "react";

export default function BrazilClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "America/Sao_Paulo",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <p className="text-xs text-gray-400 opacity-60">
            {time} — My local time (GMT-3)
        </p>
    );
}