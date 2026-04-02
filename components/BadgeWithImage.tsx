import { cn } from "@/lib/utils";

export default function BadgeWithImage({ name, icon, textColor, link }: { name: string, icon: string, textColor?: string, link?: string }) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(
                "flex flex-col w-20 h-auto gap-2 justify-center items-center text-center pointer-events-none select-none",
                link ? "pointer-events-auto cursor-pointer" : "pointer-events-none cursor-default"
            )}
        >
            <img
                className="w-8 h-8 object-contain" 
                src={icon} 
                alt={name}
            />
            <p className={`antialiased text-xs ${textColor ? textColor : "text-gray-300"}`}>{name}</p>
        </a>
    )
}