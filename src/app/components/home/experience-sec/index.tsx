import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "01/2020 - 02/2021",
      title: "Jr.Software Developer",
      company: "www.ghodawatsoftech.com",
      type: "Fulltime",
      description:
        "Implemented 27 reusable dynamic UI components using HTML, CSS, JavaScript, React.js, and React Native. Collaborated with a team of 7 developers using Git to streamline workflow and improve code tracking. Successfully developed a secure login module with OTP masking. Participated in 12 code reviews with senior developers, resulting in a 30% enhancement in code quality. Additionally integrated third-party libraries for features such as CSV export and a country code picker.",
    },
    {
      year: "02/2021 - 07/2022",
      title: "Frontend Developer",
      company: "www.aexonic.com",
      type: "Fulltime Remote",
      description:
        "Led multiple projects from inception to delivery while closely collaborating with teams and directly engaging with clients to gather requirements and deliver high-quality solutions, earning positive client feedback. Integrated a QR code generator using Redux, Redux Thunk, and Axios within the project architecture. Developed and successfully presented an e-commerce mobile application. Applied optimization techniques such as memoization, code splitting, and lazy loading, improving rendering performance by 20%.",
    },
    {
      year: "07/2022+",
      title: "Frontend Developer",
      company: "https://5d.solutions",
      type: "Fulltime Remote",
      description:
        "Led the frontend development from project inception, setting up the file structure and improving performance by 65% while enhancing code stability and debugging efficiency. Implemented Redux Toolkit, React Router, and React Navigation for strong state management and seamless navigation. Mentored four junior developers, achieving significant gains in productivity and code quality. Strengthened application security through crypto-based encryption and integrated key libraries such as a calendar module, Socket.io for real-time updates, and push notifications to boost user engagement.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div className="">
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-80" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
