import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Abhishek</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>Frontend Developer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Experienced front end developer with 5.10+ years in JavaScript,
              TypeScript, ReactJS.React Native, Next.Js,Agile team player
              skilled in Figma mockups, delivering high-quality work, and
              staying updated with emerging tech for exceptional results.
              Excited to contribute expertise to drive successful outcomes for
              clients and teams.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/Abhishek-banner.jpeg")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/Abhishek-banner.jpeg")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
