import Button from "@/components/Button";
import Photo from "@/components/animation/Photo";
import Socials from "@/components/Socials";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-row items-center justify-between pt-8 pb-24">
          {/* text */}
          <div className="text-left ">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-green-500">Krish Ramani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-lg">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* buttons and socials */}

            <div className="flex flex-row items-center gap-8 ">
              <Button className="items-center flex gap-2 bg-transparent text-green-500 border border-green-500 ">
                <span>Download CV</span>
                <FiDownload className="text-xl mt-0.5" />
              </Button>
              <div>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-500 rounded-full flex justify-center items-center text-green-500 text-base hover:bg-green-500 
                                hover:text-stone-700 hover:transition-all duration-500 "
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
