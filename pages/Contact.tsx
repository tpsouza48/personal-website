import BadgeWithImage from "../components/BadgeWithImage";

export default function Contact() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row w-full gap-10">
                {/* Left column */}
                <div className="flex flex-col sm:w-1/2 w-full">
                    <p className="text-sm text-white">=== Contact me ===</p>
                    <p className="text-xl">Where can you find me?</p>
                    
                    <p className="text-sm mt-3">
                        You can contact me through any of the following platforms.
                    </p>
                </div>

                {/* Right column */}
                <div className="flex flex-col sm:w-1/2 w-full justify-center">
                    <p className="text-sm mb-5 text-center sm:text-left">{">"} Platforms im in</p>
                    <div className="flex flex-row gap-4 max-w-full flex-wrap justify-center sm:justify-start">    
                        <BadgeWithImage 
                            name="GitHub" 
                            icon="/socials/github.png" 
                            textColor="text-white"
                            link="https://github.com/tpsouza48"
                        />
                        <BadgeWithImage 
                            name="Instagram" 
                            icon="/socials/instagram.png" 
                            textColor="text-pink-400"
                            link="https://www.instagram.com/_tpsouza/"
                        />
                        <BadgeWithImage 
                            name="LinkedIn" 
                            icon="/socials/linkedin.png" 
                            textColor="text-blue-400"
                            link="https://www.linkedin.com/in/thiago-souza-12ba41282/"
                        />
                    </div>

                    <p className="text-sm mb-5 mt-10 text-center sm:text-left">{">"} Or, alternatively... send me an e-mail</p>
                    <div className="flex sm:mx-0 mx-auto">
                        <BadgeWithImage 
                            name="E-mail" 
                            icon="/socials/email.png" 
                            textColor="text-white"
                            link="mailto:thpimentel368@gmail.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}