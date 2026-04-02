export default function Projects() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row w-full gap-10">
                {/* Left column */}
                <div className="flex flex-col sm:w-1/2 w-full">
                    <p className="text-sm text-white">=== Projects ===</p>
                    <p className="text-xl">Some of my work</p>
                    
                    <p className="text-sm mt-3">
                        For now this section is <span className="text-yellow-400">under construction</span>, but you can check some of my projects on my GitHub profile (contact section).
                        <br />
                        <br />
                        Most of my projects are private or under some kind of NDA, so if you wanna know more about what i created, 
                        enter in contact with me so we can chat. My apologies!
                    </p>
                </div>
            </div>
        </div>
    )
}