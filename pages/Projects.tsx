import BadgeWithImage from "@/components/BadgeWithImage";

export default function Projects() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row w-full gap-15">
                {/* Left column */}
                <div className="flex flex-col sm:w-1/2 w-full">
                    <p className="text-sm text-white">=== Projects ===</p>
                    <p className="text-xl">Some of my work</p>
                    
                    <p className="text-sm mt-3">
                        For now this section is <span className="text-yellow-400">under construction</span>, 
                        so there won't be much to see here, but you can check out this website code by clicking on it's badge.
                        <br />
                        <br />
                        Most of my projects are private or under some kind of NDA, so if you wanna know more about what i created, 
                        enter in contact with me so we can chat. My apologies!
                    </p>
                </div>
                
                {/* Right column */}
                <div className="flex flex-col sm:w-1/2 w-full justify-center">
                    <p className="text-sm mb-5 text-center sm:text-left">{">"} My public repositories</p>
                    <div className="flex flex-row gap-4 max-w-full flex-wrap justify-center sm:justify-start">    
                        <BadgeWithImage 
                            name="My website's code" 
                            icon="/projects/dev.png" 
                            textColor="text-white"
                            link="https://github.com/tpsouza48/personal-website"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}