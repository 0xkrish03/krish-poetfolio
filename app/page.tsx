import Photo from "@/components/animation/Photo";
import Socials from "@/components/Socials";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-row items-center justify-between pt-8 pb-24">
          {/* text */}
          <div className="text-left ">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Krish Ramani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-lg">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* buttons and socials */}

            <div className="flex flex-row items-center gap-8 ">
              <Button variant="outline">
                <span>Download CV</span>
                <FiDownload className="text-xl mt-0.5" />
              </Button>
              <div>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-stone-700 hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
