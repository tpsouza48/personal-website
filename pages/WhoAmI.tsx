import BadgeWithImage from "../components/BadgeWithImage";
import BrazilClock from "../components/BrazilClock";
import Separator from "../components/Separator";

export default function WhoAmI() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row w-full gap-10">
                {/* Left column */}
                <div className="flex flex-col sm:w-1/2 w-full">
                    <p className="text-sm text-white">=== Who am I? ===</p>
                    <p className="text-xl">My name is <span className="font-bold">Thiago Souza</span>.</p>
                    
                    <p className="text-sm mt-3">
                        I am a fullstack developer from <span className="text-green-500">Brazil</span> with more than 2 years and a half of experience in software development.
                        I have worked with a ample variety of modern technologies, being very passionate about creating efficient and scalable applications, 
                        and I am always eager to learn new technologies and improve my skills.

                        <br />
                        <br />

                        In addition to my technical background, I value clean code, maintainability, and collaboration within teams.
                        I enjoy turning complex problems into simple, 
                        user-friendly solutions and take pride in writing code that is not only functional 
                        but also easy to understand and extend. Whether working on the frontend or backend, 
                        I strive to deliver high-quality results and continuously refine my 
                        approach through best practices and real-world experience.

                        <br />
                        <br />
                    </p>

                    <div className="flex flex-col gap-2 mt-8">
                        <BrazilClock />
                        <span className="text-[10px] text-gray-400 opacity-60">(i use arch btw.)</span>
                    </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col sm:w-1/2 w-full justify-center">
                    {/* Skills section */}
                    <div className="flex flex-col mt-9">
                        <p className="text-sm mb-5 text-center sm:text-left">{">"} Languages and Frameworks</p>
                        <div className="flex flex-row gap-4 max-w-full flex-wrap justify-center sm:justify-start">
                            <BadgeWithImage 
                                name="Next.js" 
                                icon="/icons/nextjs.png" 
                            />
                            <BadgeWithImage 
                                name="Typescript" 
                                icon="/icons/typescript.png"
                                textColor="text-blue-400"
                            />
                            <BadgeWithImage 
                                name="Python" 
                                icon="/icons/python.png" 
                                textColor="text-yellow-400"
                            />
                            <BadgeWithImage 
                                name="Vue.js" 
                                icon="/icons/vue.png" 
                                textColor="text-green-400"
                            />
                            <BadgeWithImage 
                                name="Golang" 
                                icon="/icons/golang.png" 
                                textColor="text-blue-300"
                            />
                            <BadgeWithImage 
                                name="React Native" 
                                icon="/icons/react-native.png" 
                                textColor="text-blue-200"
                            />
                            <BadgeWithImage 
                                name="Tailwind CSS" 
                                icon="/icons/tailwind.png" 
                                textColor="text-cyan-300"
                            />
                            <BadgeWithImage 
                                name="C++" 
                                icon="/icons/cpp.png" 
                                textColor="text-blue-400"
                            />
                        </div>

                        <Separator />

                        <p className="text-sm mb-5 text-center sm:text-left">{">"} Databases and Tools</p>
                        <div className="flex flex-row gap-4 max-w-full flex-wrap justify-center sm:justify-start">    
                            <BadgeWithImage 
                                name="PostgreSQL" 
                                icon="/icons/postgres.png" 
                                textColor="text-blue-300"
                            />
                            <BadgeWithImage 
                                name="Redis" 
                                icon="/icons/redis.png" 
                                textColor="text-red-400"
                            />
                            <BadgeWithImage 
                                name="Docker" 
                                icon="/icons/docker.png" 
                                textColor="text-blue-400"
                            />
                            <BadgeWithImage 
                                name="Godot" 
                                icon="/icons/godot.png" 
                                textColor="text-blue-300"
                            />
                            <BadgeWithImage 
                                name="Arduino" 
                                icon="/icons/arduino.png" 
                                textColor="text-cyan-400"
                            />
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    )
}